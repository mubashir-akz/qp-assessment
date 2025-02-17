# Grocery Booking API

This is a NestJS-based Grocery Booking API designed to manage grocery items and orders. It supports two roles: Admin and User, with specific responsibilities for each.

## Features

### **Admin Responsibilities:**
- Add new grocery items
- View existing grocery items
- Remove grocery items
- Update details of existing grocery items
- Manage inventory levels

### **User Responsibilities:**
- View available grocery items
- Book multiple grocery items in a single order

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **TypeORM**: An ORM for TypeScript and JavaScript that supports PostgreSQL, MySQL, and other databases.
- **PostgreSQL**: A powerful, open-source relational database system.
- **Docker**: For containerization of the application.

---

## API Documentation

### **Admin Endpoints**

| Method | Endpoint                 | Description                    | Request Body Example |
|--------|--------------------------|--------------------------------|----------------------|
| POST   | `/grocery`               | Add a new grocery item        | `{ "name": "Milk", "price": 2.99, "quantity": 100 }` |
| GET    | `/grocery`               | List all grocery items        | -                    |
| PUT    | `/grocery/:id`           | Update item details (name, price) | `{ "name": "Organic Milk", "price": 3.49 }` |
| DELETE | `/grocery/:id`           | Remove a grocery item         | -                    |
| PATCH  | `/grocery/:id/inventory` | Update inventory quantity     | `{ "quantity": 50 }` |

### **User Endpoints**

| Method | Endpoint                | Description                      | Request Body Example |
|--------|-------------------------|----------------------------------|----------------------|
| GET    | `/grocery/available`    | View available items (in-stock) | -                    |
| POST   | `/orders`               | Place an order                  | `{ "userId": 1, "addressId": 1, "items": [{ "groceryId": 1, "quantity": 5 }] }` |

### **Additional System Endpoints**

| Method | Endpoint     | Description              | Request Body Example |
|--------|-------------|--------------------------|----------------------|
| POST   | `/users`    | Create a user (admin/user role) | `{ "username": "john", "password": "pass", "role": "user" }` |
| POST   | `/address`  | Add an address           | `{ "street": "123 Main St", "city": "NY", "state": "NY", "zipCode": "10001" }` |
| GET    | `/address`  | List all addresses       | -                    |
| GET    | `/orders`   | List all orders         | -                    |
| GET    | `/orders/:id` | Get order details by ID | -                    |