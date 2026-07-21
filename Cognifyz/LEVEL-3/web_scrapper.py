import requests
from bs4 import BeautifulSoup
url = "https://quotes.toscrape.com/"

print("Connecting to the Website...")
response = requests.get(url)

if response.status_code == 200:
    print("Connection Successful!")

    soup = BeautifulSoup(response.text, 'html.parser')
    
    quote_boxes = soup.find_all('div', class_= 'quote')
    for i, box in enumerate(quote_boxes, 1):
        text = box.find('span', class_='text').text
        author = box.find('small', class_='author').text

        print(f"Quote {i}")
        print(f"\"{text}\"")
        print(f"- {author}\n")
else:
    print(f"Failed to connect to the webpage. Status code: {response.status_code}")