const { project, user, Tasks, Sequelize } = require('./../models');
const { Op } = Sequelize.Op;
let self = {};

self.getAll = async (req, res) => {
    try {
        let data = await project.findAll({
            include: [{
                model: user,
                as: 'created_by_user',
                attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
            },
            {
                model: Tasks,
                as: 'tasks',
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            }
        ],
        });
        return res.status(200).json({ success: true, count: data.length, data: data });
    } catch (error) {
        console.log(error);
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
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            user_id: req.body.user_id,
        };
        let data = await project.create(newProject);
        return res.status(201).send({
            success: true,
            message: "Project created successfully",
            data: data,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "An error occurred while creating the project",
            error: error,
        });
    };
};

self.getProjectByID = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await project.findByPk(id, {
            where: {
                id: id,
            },
            include: [{
                model: user,
                as: 'created_by_user',
            }],
        });
        return res.status(200).json({ success: true, data: data });
    } catch (error) {
        return res.status(500).json({ success: false, error: error });
    };
};

self.getProjectByUserID = async (req, res) => {
    try {
        let usr_id = req.params.user_id;
        let data = await project.findAll({
            where: {
                user_id: usr_id,
            },
            include: [{
                model: user,
                as: 'created_by_user',
            }],
        });
        return res.status(200).json({ success: true, count: data.length, data: data });
    } catch (error) {
        return res.status(500).json({ success: false, error: error });
    };
};

self.updateProject = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await project.update(req.body, {
            where: {
                id: id,
            },
        });
        if (data == 1) {
            return res.status(200).json({ success: true, message: "Project updated successfully" });
        } else {
            return res.status(404).json({ success: false, message: "Project not found" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: error });
    };
};

self.deleteProject = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await project.destroy({
            where: {
                id: id,
            },
        });
        if (data == 1) {
            return res.status(200).json({ success: true, message: "Project deleted successfully" });
        } else {
            return res.status(404).json({ success: false, message: "Project not found" });
        }
    } catch (error) {
        return res.status(500).json({ success: false, error: error });
    };
};

self.deleteAllProjects = async (req, res) => {
    try {
        let data = await project.destroy({
            where: {},
            truncate: false,
        });
        return res.status(200).json({ success: true, message: "All projects deleted successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, error: error });
    }
}

module.exports = self;