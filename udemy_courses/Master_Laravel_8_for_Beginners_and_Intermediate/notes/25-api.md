
In the course the tutor has used mostly this documentation 

https://laravel.com/docs/5.8/api-authentication

However from laravel 9 it is recomended to use Laravel Sanctum

https://laravel.com/docs/9.x/sanctum#introduction



### Headers
{
    "Content-Type" : "application/json",
    "Accept" : "application/json"
}

### Passing the api token through the header

    http://localhost/laravel/api/v1/posts/2/comments?api_token=5oCX6I3udoTIoqqHzMh3tC2mOBXpibSpRAdlu4omzBDhJwjDFjG............sadfsad


### Passing the api token in header

{
    "Content-Type"  : "application/json",
    "Accept"        : "application/json",
    "Authorization" : "Bearer 5oCX6I3udoTIoqqHzMh3tC2mOBXpibSpRAdlu4omzBDhJwjDFjG2pNoqsfm4Cmoc1macnB5bEJGgIY3H"
}
