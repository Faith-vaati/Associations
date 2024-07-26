const { Profile, user, Sequelize } = require('./../models');
const { Op } = Sequelize.Op;

let self = {};

self.getAll = async (req, res) => {
    try {
        let data = await Profile.findAll({
            include: [{
                model: user,
                as: 'user',
                attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
            }],
        });
        return res.status(200).json({ success: true, count: data.length, data: data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: error });
    }
};

self.createProfile = async (req, res) => {
    if (!req.body.bio) {
        return res.status(400).send({
            success: false,
            message: "Body is required"
        })
    }
    try {
        const newProfile = {
            bio: req.body.bio,
            user_id: req.body.user_id,
        };
        let data = await Profile.create(newProfile);
        return res.status(201).send({
            success: true,
            message: "Profile created successfully",
            data: data,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "An error occurred while creating the profile",
            error: error,
        });
    };
};

self.getUsersProfile = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "An error occurred while fetching the profile",
        })
    }
}

module.exports = self;