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

# Start the application
npm run dev
```

