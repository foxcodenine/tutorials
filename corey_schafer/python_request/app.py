# https://www.youtube.com/watch?v=tb8gHvYlCFs&t=1s
# https://requests.readthedocs.io/en/master/
# https://httpbin.org/#/
# ______________________________________________________________________

def ppp(i):
    print(f'\n({i})___________________________________________________\n')

# ______________________________________________________________________
import requests
from pprint import pprint

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

ppp(8)#_________________________________________________________________

# Testing request on httpbin.org


pay_load = {'name': 'Christopher', 'surname': 'Farrugia', 'age': 35}
r_httpbin_get = requests.get('https://httpbin.org/get', params=pay_load)

print(r_httpbin_get.text)

# {
#   "args": {
#     "age": "35",
#     "name": "Christopher",
#     "surname": "Farrugia"
#   },

ppp(9)#_________________________________________________________________

print(r_httpbin_get.url)

ppp(10)#_________________________________________________________________

pay_load = {'username': 'christopher', 'email': 'chris12aug@yahoo.com', 'password': 'testing35'}
r_httpbin_post = requests.post('https://httpbin.org/post', data=pay_load)

print(r_httpbin_post.text)
print(r_httpbin_post.url)

# "form": {
#     "email": "chris12aug@yahoo.com",
#     "password": "testing35",
#     "username": "christopher"
#   }

ppp(11)#_________________________________________________________________

# .json()

r_dict = r_httpbin_post.json()
pprint(r_dict)


ppp(12)#_________________________________________________________________

# Testing basic autentication:

user = 'chris'
password = 'orange'

r_auth = requests.get('https://httpbin.org/basic-auth/{}/{}'.format(user, password))


print(r_auth.url)
# https://httpbin.org/basic-auth/chris/orange

print(r_auth.text)

print(r_auth)

ppp(12)#_________________________________________________________________


user = 'chris'
password = 'orange'

r_auth = requests.get(f'https://httpbin.org/basic-auth/{user}/{password}',  auth=('chris', 'orange'))


print(r_auth.text)

print(r_auth)


ppp(13)#_________________________________________________________________

# Setting a time to our request of 3sec, the site is going to delay 
# for 2sec. If it exceeds 3 it with give a timeout error.


r_auth = requests.get(f'https://httpbin.org/delay/2',  timeout=3)


print(r_auth)

