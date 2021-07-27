import wget
from bs4 import BeautifulSoup

#
# # For participants
# output_directory = 'Resources/participants'
# source_path = 'Resources/Dropbox_HTML/participants - Dropbox.html'

# For projects
output_directory = 'Resources/projects'
source_path = 'Resources/Dropbox_HTML/projects - Dropbox.html'

f = open(source_path, "r")
soup = BeautifulSoup(f.read(), 'html.parser')
link_form1 = 'https://www.dropbox.com/sh'
link_form2 = '.json'

i = 0
for link in soup.find_all('a'):
    link = f"{link.get('href')[0: -1]}1"
    print(link)

    if link_form1 in link and link_form2 in link:
        # wget.download(link, out=output_directory)
        i = i + 1
        if i > 100000:
            break
        print(link)
print(i)
