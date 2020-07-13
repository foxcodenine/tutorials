# https://www.youtube.com/watch?v=tb8gHvYlCFs&t=1s
# https://requests.readthedocs.io/en/master/
# https://httpbin.org/#/
# ______________________________________________________________________

def ppp(i):
    print(f'\n({i})___________________________________________________\n')

# ______________________________________________________________________
import requests

ppp(1)#_________________________________________________________________

r = requests.get('https://xkcd.com/353/')
print(r)

ppp(2)#_________________________________________________________________

# The dir() method tries to return a list of valid attributes of the object
print(dir(r))

# The help() method calls the built-in Python help system.
# print(help(r))

ppp(3)#_________________________________________________________________


# This will print the page html
print(r.text)

ppp(4)#_________________________________________________________________

# Here we are doing a get responce to an image
r_image = requests.get('https://imgs.xkcd.com/comics/python.png')

# This will print the image in bytes
# print(r_image.content)

# And this will save the image to a file
with open('comic_image.png', 'wb') as file:
    file.write(r_image.content)

ppp(5)#_________________________________________________________________

r = requests.get('https://xkcd.com/353/')

print(r.status_code)

ppp(6)#_________________________________________________________________

# This will print only False if there is a 400 range or 500 range error
print(r.ok)

ppp(7)#_________________________________________________________________

my_site = requests.get('http://foxhost9.com/mfp/')

# This will get the site header
print(my_site.headers)

