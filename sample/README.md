# E-Commerce API
This is an e-commerce API backend. It consists of Products, Tags and Categories.

Use the API specification below to test the API endpoints functionality

[Products](#products)

[Tags](#tags)

[Categories](#categories)



# Products
##### **GET** Get all products
    
    
`/api/products`


##### **GET** Get a single product
    
    
`/api/products/1`


##### **PUT** Update a single product
    
    
`/api/products/2`

**Body** raw (json)
```json
{
    "price": 123,
    "tagIds":[2]
}
````
##### **POST** Create a new product
    
    
`/api/products`

**Body** raw (json)
```json
{
    "product_name": "Plain T-Shir 23",
    "price": 1,
    "stock": 14,
    "tagIds": [1]
}
````
##### **DELETE** Delete a product
    
    
`/api/products/1`


# Tags
##### **GET** Get all tags
    
    
`/api/tags`


##### **GET** Get a single tag
    
    
`/api/tags/1`


##### **POST** Create a new tag
    
    
`/api/tags`

**Body** raw (json)
```json
{"id":100,"tag_name": "rock music"}
````
##### **PUT** Update a tag
    
    
`/api/tags/1`

**Body** raw (json)
```json
{"tag_name": "test music"}
````
##### **DELETE** Delete a tag
    
    
`/api/tags/1`


# Categories
##### **GET** Get all categories
    
    
`/api/categories`


##### **GET** Get a single category
    
    
`/api/categories/2`


##### **POST** Create a new category
    
    
`/api/categories`

**Body** raw (json)
```json
{
    "category_name": "Shirts"
}
````
##### **PUT** Update a category
    
    
`/api/categories/6`

**Body** raw (json)
```json
{
    "category_name": "Shirts"
}
````
##### **GET** Delete a category
    
    
`/api/categories/6`


