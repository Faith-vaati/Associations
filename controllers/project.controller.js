const { project, user, Sequelize } = require('./../models');
const { Op } = Sequelize.Op;
let self = {};

self.getAll = async (req, res) => {
    try {
        let data = await project.findAll({
            include: [{
                model: user,
                as: 'users',
            }],
        });
        return res.status(200).json({ success: true, count: data.length, data: data });
    } catch (error) {
        res.status(500).json({ success: false, error: error });
    }
};

self.createProject = async (req, res) => {
    if (req.body.name == null || req.body.description == null) {
        return res.status(400).send({
            success: false,
            message: "Please provide a name and a description",
        });
    }
    try {
        const newProject = {
            name: req.body.name,
            description: req.body.description,
            user_id: req.body.user_id,
        };
        let data = await project.create(newProject);
        return res.status(201).send({
            success: true,
            message: "Project created successfully",
            data: data,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "An error occurred while creating the project",
            error: error,
        });
    };
};

module.exports = self;