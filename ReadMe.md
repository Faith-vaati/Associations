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
- POST /api/users: Create a new user
- PUT /api/users/:id: Update a user by ID
- DELETE /api/users/:id: Delete a user by ID
- DELETE /api/users/all: Delete all users

### Projects
- GET /api/projects: Get all projects
- GET /api/projects/:id: Get a specific project by ID
- POST /api/projects: Create a new project
- PUT /api/projects/:id: Update a project by ID
- DELETE /api/projects/:id: Delete a project by ID
- DELETE /api/projects/all: Delete all projects

## Models
Description of the database models and their attributes.

### users
- id: UUID (primary key)
- firstName: STRING
- lastName: STRING
- email: STRING
- age: INTEGER
- createdAt: DATE
- updatedAt: DATE

### projects
- id: UUID (primary key)
- name: STRING
- description: STRING
- start_date: DATE
- end_date: DATE
- user_id: UUID (foreign key)
- createdAt: DATE
- updatedAt: DATE


## Seeders
Instructions on how to use the seeders to populate the database with initial data.

```bash
# Run all seeders
sequelize db:seed:all


# Run a specific seeder
sequelize db:seed --seed YYYYMMDDHHMMSS-seed-users.js
```

## Technologies
List of technologies used in the project.
- Node.js
- Express.js
- Sequelize
- PostgreSQL
- UUID
- CORS
- dotenv

## Contributing
Instructions on how to contribute to the project.

1. Fork the repository
2. Create a new branch (git checkout -b feature-branch)
3. Make your changes
4. Commit your changes (git commit -m 'Add some feature')
5. Push to the branch (git push origin feature-branch)
6. Open a pull request

## License
This project is licensed under the MIT License - see the [LICENSE]() file for details.

## Contact
- Email: wambukeren@gmail.com
- GitHub: MungaiKeren

```bash
### Tips for Writing the README

1. **Be Clear and Concise**: Use simple language and be as clear as possible.
2. **Use Code Blocks**: For commands, code snippets, and configurations, use code blocks to improve readability.
3. **Include Examples**: Provide examples of how to use the application.
4. **Keep it Updated**: Regularly update the README to reflect any changes in the project.
5. **Add Screenshots**: If applicable, add screenshots to demonstrate the functionality.

```