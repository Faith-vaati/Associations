const { where } = require("sequelize");
const { user, Sequelize, project } = require("./../models");
const { Op } = Sequelize.Op;
let self = {};

self.getAll = async (req, res) => {
  try {
    let data = await user.findAll({
      include: [{
        model: project,
        as: "projects",
      }]
    });
    return res
      .status(200)
      .json({ success: true, count: data.length, data: data });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

self.createUser = async (req, res) => {
  if (!req.body.firstName || !req.body.lastName) {
    return res.status(400).send({
      success: false,
      message: "Please provide a first name and a last name",
    });
  }
  try {
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
    };
    let data = await user.create(newUser);
    return res.status(201).send({
      success: true,
      message: "User created successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "An error occurred while creating the user",
      error: error,
    });
  }
};

// get single user by id
self.getUserByID = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await user.findByPk(id, {
      where: {
        id: id,
      },
      include: [{
        model: project,
        as: "projects",
      }]
    });
    if (data) {
      return res.status(200).send({
        success: true,
        message: "User retrieved successfully",
        data: data,
      });
    } else {
      return res.status(404).send({
        success: false,
        message: "User not found",
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "An error occurred while retrieving the user",
      error: error,
    });
  }
};

// update user by id
self.updateUser = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let data = await user.update(body, {
      where: {
        id: id,
      },
    });
    if (data[0] === 0) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "User updated successfully",
      "rows changed": data,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "An error occurred while updating the user",
      error: error,
    });
  }
};

// delete user by id
self.deleteUser = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await user.destroy({
      where: {
        id: id,
      },
    });
    if (data === 1) {
      return res.status(200).send({
        success: true,
        message: "User deleted successfully",
      });
    } else {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "An error occurred while deleting the user",
      error: error,
    });
  }
};

// delete all users
self.deleteAllUsers = async (req, res) => {
  try {
    let data = await user.destroy({
      where: {},
      truncate: true,
    });
    return res.status(200).send({
      success: true,
      message: "All users deleted successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "An error occurred while deleting all users",
      error: error,
    });
  }
};

module.exports = self;
