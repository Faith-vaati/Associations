const { user, Sequelize, project, Profile } = require("./../models");
const { Op } = Sequelize.Op;
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let self = {};

self.getAll = async (req, res) => {
  try {
    let data = await user.findAll({
      include: [{
        model: project,
        as: "projects",       
      },{
        model: Profile,
        as: "profile",
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
  // hash the password
  const hashed_password = bycrypt.hashSync(req.body.password, 10);

  try {
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashed_password,
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

self.login = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({
        success: false,
        message: "Please provide an email and a password",
      });
    }
    let data = await user.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    // compare the passwords
    let passwordIsValid = bycrypt.compareSync(req.body.password, data.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        success: false,
        message: "Invalid password",
      });
    }
    // generate token
    let token = jwt.sign({ 
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    }, 
    process.env.JWT_SECRET, {
      expiresIn: 86400, // 24 hours
    });
    return res.status(200).send({
      success: true,
      message: "User logged in successfully",
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "An error occurred while logging in",
      error: error,
    });
  };
};

// generate otp
self.generateOTP = async (req, res) => {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
    const userid = req.params.id;

    // save the OTP to the user table
    // let data = await user.update({ otp: otp }, {
    //   where: {
    //     id: userid,
    //   },
    // });

    // console.log(data);

    // if (data[0] === 0) {
    //   return res.status(404).send({
    //     success: false,
    //     message: "User not found",
    //   });
    // }
    return res.status(200).send({
      success: true,
      message: "OTP generated successfully",
      otp: otp,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "An error occurred while generating OTP",
      error: error,
    });
  }
}

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
      },
      {
        model: Profile,
        as: "profile",
      }
      ]
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
    console.log(error);
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

    // if password is provided, hash it
    if (body.password) {
      body.password = bycrypt.hashSync(body.password, 10);
    }

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
