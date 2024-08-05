const express = require("express");
const cors = require("cors");
require('dotenv').config();  // Load environment variables from .env

const app = express();

// CORS configuration
var corsOptions = {origin: "http://localhost:8081"};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for the home page
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the application." });
});

// Import routes
const users = require("./routes/users.routes");
const projects = require("./routes/projects.routes");
const profile = require("./routes/profile.routes");
const tasks = require("./routes/tasks.routes");
const comments = require("./routes/comments.routes");

// Use routes
app.use("/api", users);
app.use("/api", projects);
app.use("/api", profile);
app.use("/api", tasks);
app.use("/api", comments);

// Sequelize connection setup
const { Sequelize } = require('sequelize');
const config = require('./config/config.js');
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect
});

// Test database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
