#### Tutorials

Go REST Guide. The Standard Library

    https://www.jetbrains.com/guide/go/tutorials/rest_api_series/stdlib/
    
    https://github.com/xNok/go-rest-demo/tree/5a627212098b9aa17a2db5798b0dcf8a7b4d12db

GopherCon 2018: Kat Zien - How Do You Structure Your Go Apps

    https://www.youtube.com/watch?v=oL6JBUk6tj0

The standard library now has all you need for advanced routing in Go.

    https://www.youtube.com/watch?v=H7tbjKFSg58

* middleware
* subrouting
* path parameters
* http methods
* passing down context 

Uupgrading or Downgrading Go

    https://www.practical-go-lessons.com/chap-40-upgrading-or-downgrading-go
    

#### Music

    The Most Peaceful DUNE Music You've Never Heard 
    (Soothing Ambience for Deep Relaxation & Healing)
    https://www.youtube.com/watch?v=GCxBxwNYAqs

#### Comands

#### External packages

The slug package from gosimple is used in Go projects to create
URL-friendly slugs from strings. This can be particularly useful in web
development for creating clean, readable URLs from page or post titles.
    
     go get -u github.com/gosimple/slug



#### Building a REST API with the Standard Library

Next, you're going to build a sample API that helps users find available
recipes they can make with the ingredients in their fridges. This is a
simple example, but it will go through the basic CRUD operations
required in most REST APIs.

Specifically, you'll implement the following endpoints for the resource /recipes/:


| Action | Verb   | Path           | Description                             |
|--------|--------|----------------|-----------------------------------------|
| Create | POST   | /recipes       | Create an entity represented by the JSON payload |
| List   | GET    | /recipes       | Get all entities from the resource      |
| Read   | GET    | /recipes/<id>  | Get a single entity                     |
| Update | PUT    | /recipes/<id>  | Update an entity with the JSON payload  |
| Delete | DELETE | /recipes/<id>  | Delete an entity                        |
