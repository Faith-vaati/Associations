const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            success: false,
            message: "A token is required for authentication",
        });
    };

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                success: false,
                message: "Invalid token",
            });
        }
        req.user = decoded;
        next();
    });
};

module.exports = verifyToken;