const { Comment, Tasks, user} = require("./../models");

const self = {};

self.create = async (req, res) => {
    if (!req.body.content || !req.body.task_id || !req.body.user_id) {
        return res.status(400).json({
            message: "Body is required"
        });
    }

    try {
        const newComment = {
            content: req.body.content,
            task_id: req.body.task_id,
            user_id: req.body.user_id
        }
        let data = await Comment.create(newComment);
        return res.status(201).json({
            success: true,
            message: "Comment created successfully",
            data: data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to create comment"
        })
    };
};

self.getAll = async (req, res) => {
    try {
        const data = await Comment.findAll({
            include: [{
                model: Tasks,
                as: "task",
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            }, {
                model: user,
                as: "user",
                attributes: { exclude: [ 'password', 'createdAt', 'updatedAt'] },
            }],
        });
        return res.status(200).json({
            success: true,
            count: data.length,
            data: data
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch comments"
        });
    };
};

module.exports = self;