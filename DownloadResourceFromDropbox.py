import wget
from bs4 import BeautifulSoup


f = open("Resources/Dropbox_HTML/participants - Dropbox.html", "r")
soup = BeautifulSoup(f.read(), 'html.parser')
link_form1 = 'https://www.dropbox.com/sh'
link_form2 = 'participants/'
output_directory = 'Resources/participants'


i = 0
for link in soup.find_all('a'):
    link = f"{link.get('href')[0: -1]}1"
    if link_form1 in link and link_form2 in link:
        wget.download(link, out=output_directory)
        i = i + 1
        if i > 5000:
            break
        print(link)







