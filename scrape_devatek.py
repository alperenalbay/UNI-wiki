import os
import json
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

BASE_URL = "https://www.devatek.com"
OUTPUT_DIR = "reference_data"
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "site_full_dump.json")

# Key paths to scrape on Devatek
TARGET_PATHS = [
    "/",
    "/lite",
    "/elite",
    "/prime",
    "/fiyat-listesi",
    "/hakkimizda",
    "/is-ortaklarimiz",
    "/referanslar",
    "/gib-durum-kodlari",
    "/blog",
    "/iletisim"
]

def scrape_site():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    scraped_data = {}
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    
    for path in TARGET_PATHS:
        url = urljoin(BASE_URL, path)
        print(f"Scraping: {url}")
        try:
            response = requests.get(url, headers=headers, timeout=15)
            if response.status_code == 200:
                soup = BeautifulSoup(response.text, 'html.parser')
                
                # Extract title
                title = soup.title.string if soup.title else ""
                
                # Extract main headings
                headings = []
                for h in soup.find_all(['h1', 'h2', 'h3']):
                    headings.append({"tag": h.name, "text": h.get_text(strip=True)})
                
                # Extract paragraphs and lists
                text_content = []
                for p in soup.find_all(['p', 'li', 'td', 'th']):
                    t = p.get_text(strip=True)
                    if t and t not in text_content:
                        text_content.append(t)
                
                # Extract links
                links = []
                for a in soup.find_all('a', href=True):
                    links.append({"text": a.get_text(strip=True), "href": a['href']})
                
                scraped_data[path] = {
                    "url": url,
                    "status_code": response.status_code,
                    "title": title,
                    "headings": headings,
                    "text_content": text_content,
                    "links": links
                }
            else:
                print(f"Failed to fetch {url}: Status {response.status_code}")
                scraped_data[path] = {"url": url, "status_code": response.status_code}
        except Exception as e:
            print(f"Error scraping {url}: {e}")
            scraped_data[path] = {"url": url, "error": str(e)}
            
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(scraped_data, f, ensure_ascii=False, indent=2)
    print(f"Scraping complete. Data saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    scrape_site()
