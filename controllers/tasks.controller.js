const { Tasks, project } = require('./../models');

let self = {};

self.createTask = async (req, res) => {
    if (!req.body.title) {
        return res.status(400).send({
            success: false,
            message: "Title is required"
        })
    }
    try {
        const newTask = {
            title: req.body.title,
            description: req.body.description,
            start_date: req.body.start_date,
            project_id: req.body.project_id,
        };
        let data = await Tasks.create(newTask);
        return res.status(201).send({
            success: true,
            message: "Task created successfully",
            data: data,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "An error occurred while creating the task",
            error: error,
        });
    };
};

self.getAllTasks = async (req, res) => {
    try {
        const data = await Tasks.findAll({
            include: [{
                model: project,
                as: 'project',
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            }],
        });
        return res.status(200).json({
            success: true,
            count: data.length,
            data: data,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "An error occurred while fetching the tasks",
        })
    }
};

module.exports = self;