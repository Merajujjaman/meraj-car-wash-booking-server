
# Car Washing System

A full-stack Car Washing System built with **TypeScript**, **Express.js**, **MongoDB**, and **Mongoose**, offering services such as booking car wash slots, managing users, and handling service creation. This system includes authentication, authorization, and CRUD operations.

## Features
- **User Authentication** (Sign Up / Login)
- **Service Management** (Create, Read, Update, Soft Delete)
- **Slot Management** (Create Slots, Check Availability)
- **Booking Services** (Book slots for vehicle services)
- **Admin Access** (Manage services, bookings, and slots)
- **Error Handling and Transaction Management**

## Live Server

You can access the live version of the API at:
[www.example.com](http://www.example.com)

## Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn**

## Getting Started

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/car-washing-system.git
cd car-washing-system-server
```

### 2. Install Dependencies:
```bash
npm install
```
or
```bash
yarn install
```

### 3. Create `.env` file:
Create a `.env` file in the root directory and add the following environment variables:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/car-washing-system
JWT_SECRET=your_jwt_secret
```

### 4. Start the server:
To run the server locally:
```bash
npm run dev
```
or
```bash
yarn dev
```

The server should now be running on [http://localhost:5000](http://localhost:5000).

### 5. Seed Data (Optional):
You can manually add services, slots, or users by directly interacting with the database or via the provided API endpoints.

## API Endpoints

### User Routes
1. **Sign Up** - `/api/auth/signup` (POST)
    - Request Body:
    ```json
    {
      "name": "Programming Hero",
      "email": "web@programming-hero.com",
      "password": "ph-password",
      "phone": "1234567890",
      "role": "admin",
      "address": "123 Main Street, City, Country"
    }
    ```

2. **Login** - `/api/auth/login` (POST)
    - Request Body:
    ```json
    {
        "email": "web@programming-hero.com",
        "password": "ph-password"
    }
    ```

### Service Routes
1. **Create Service** (Admin) - `/api/services` (POST)
    - Request Headers:
      ```
      Authorization: Bearer <your-token>
      ```
    - Request Body:
    ```json
    {
        "name": "Car Wash",
        "description": "Professional car washing service",
        "price": 50,
        "duration": 60,
        "isDeleted": false
    }
    ```

2. **Get Service** - `/api/services/:id` (GET)
    - Response:
    ```json
    {
        "success": true,
        "statusCode": 200,
        "message": "Service retrieved successfully",
        "data": {
            "_id": "60d9c4e4f3b4b544b8b8d1c5",
            "name": "Car Wash",
            "description": "Professional car washing service",
            "price": 50,
            "duration": 60,
            "isDeleted": false,
            "createdAt": "2024-06-15T12:00:00Z",
            "updatedAt": "2024-06-15T12:00:00Z"
        }
    }
    ```

3. **Update Service** (Admin) - `/api/services/:id` (PUT)
    - Request Headers:
      ```
      Authorization: Bearer <your-token>
      ```
    - Request Body (example):
    ```json
    {
        "price": 700
    }
    ```

4. **Delete Service** (Admin) - `/api/services/:id` (DELETE)
    - Request Headers:
      ```
      Authorization: Bearer <your-token>
      ```

### Slot Routes
1. **Create Slot** (Admin) - `/api/services/slots` (POST)
    - Request Headers:
      ```
      Authorization: Bearer <your-token>
      ```
    - Request Body:
    ```json
    {
        "service": "60d9c4e4f3b4b544b8b8d1c5",
        "date": "2024-06-15",
        "startTime": "09:00",
        "endTime": "14:00"
    }
    ```

2. **Get Available Slots** - `/api/slots/availability` (GET)
    - Query Parameters:
      - `date` (optional): The specific date for which available slots are requested (format: YYYY-MM-DD).
      - `serviceId` (optional): ID of the service for which available slots are requested.
    - Example:
      ```
      GET /api/slots/availability?date=2024-06-15&serviceId=60d9c4e4f3b4b544b8b8d1c5
      ```

### Booking Routes
1. **Book a Service** (User) - `/api/bookings` (POST)
    - Request Headers:
      ```
      Authorization: Bearer <your-token>
      ```
    - Request Body:
    ```json
    {
        "serviceId": "60d9c4e4f3b4b544b8b8d1c5",
        "slotId": "60d9c4e4f3b4b544b8b8d1c6",
        "vehicleType": "car",
        "vehicleBrand": "Toyota",
        "vehicleModel": "Camry",
        "manufacturingYear": 2020,
        "registrationPlate": "ABC123"
    }
    ```

2. **Get All Bookings** (Admin) - `/api/bookings` (GET)
    - Request Headers:
      ```
      Authorization: Bearer <your-token>
      ```

3. **Get User's Bookings** (User) - `/api/my-bookings` (GET)
    - Request Headers:
      ```
      Authorization: Bearer <your-token>
      ```

## Running Tests
You can add automated tests to ensure your API works as expected. To run tests:
```bash
npm run test
```

## Folder Structure
```bash
├── src
│   ├── controllers       # API request handling
│   ├── models            # Mongoose models (User, Service, Slot, Booking)
│   ├── routes            # API route handlers
│   ├── middlewares       # Authentication, authorization, and error handling
│   ├── services          # Business logic
│   └── utils             # Helper functions
├── .env                  # Environment variables
├── package.json          # Node.js dependencies and scripts
└── README.md             # Project documentation
```

## Deployment
You can deploy this project to cloud platforms such as **Heroku**, **AWS**, **DigitalOcean**, or **Vercel**.

### To deploy on Heroku:
1. Push the code to GitHub.
2. Link your GitHub repo with Heroku.
3. Set up environment variables in the Heroku dashboard.
4. Deploy the app.

## License
This project is licensed under the MIT License.
