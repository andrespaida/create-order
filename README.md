# Create Order Microservice

This microservice is responsible for creating a new order in the system.

## Tech Stack
- JavaScript (Node.js)
- GraphQL (Apollo Server)
- MariaDB
- KISS architecture

## Endpoint
- **URL:** `POST /`  
- **GraphQL Mutation:**

```
mutation {
  createOrder(userId: "123", products: "1,2,3", total: 99.99) {
    id
    userId
    products
    total
    status
    createdAt
  }
}
```

## Swagger Documentation

```yaml
openapi: 3.0.0
info:
  title: Create Order API
  version: 1.0.0
paths:
  /:
    post:
      summary: Create a new order
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                query:
                  type: string
      responses:
        '200':
          description: Order created successfully
```