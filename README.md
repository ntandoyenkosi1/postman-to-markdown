# E-Commerce API
This is an e-commerce API backend. It consists of Products, Tags and Categories.\n\nUse the API specification below to test the API endpoints functionality

[Products](#products)

## Products


##### **GET** Get all products

`/api/products`

##### **PUT** Update a single product

`/api/products/:id`

**Body** raw (json)

```json
{   "price": 123,    "tagIds":[2]}
```
