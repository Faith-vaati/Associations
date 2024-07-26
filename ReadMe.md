# Associations in Node Express Js

This project aims to help a beginner in nodejs set up an application that implements relationships between the different models (tables) in the application. The project utilizes a one to many relationship between users and projects tables.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Endpoints](#endpoints)
5. [Models](#models)
6. [Seeders](#seeders)
7. [Technologies](#technologies)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

## Installation
Instructions on how to set up the project locally.

```bash
# Clone the repository
git clone https://github.com/MungaiKeren/Associations.git

# Navigate into the project directory
cd Associations

# Install dependencies
npm install

# Set up the environment variables
cp .env.example .env

# Migrate the database
sequelize db:migrate

# Seed the database (optional)
sequelize db:seed:all

# Seed a specific seeder e.g the project seeder (replace YYYYMMDDHHMMSS with tha date appearing in the seeder file)
sequelize db:seed --seed YYYYMMDDHHMMSS-seed-projects.js

# Start the application
npm run dev
```

## Usage
To run the app

```bash
# Example API call using curl
curl -X GET http://localhost:8080/api/users
```

## Features
List of features and functionalities of the application.

- User authentication and authorization
- CRUD operations for users and projects
- UUID-based IDs
- Timestamps for created and updated records
- Relationships between users and projects

## End Points
Detailed information about the API endpoints.

### Users
- GET /api/users: Get all users
- GET /api/users/:id: Get a specific user by ID
- `POST /api/users: Create a new user