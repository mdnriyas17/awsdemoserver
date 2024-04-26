const users = require("./userModel");

const createUser = async (req, res) => {

    const { name, email, password } = req.body;
    try {

        const user = await users.create({ name, email, password });
        if(user) {
            res.status(201).json({
                status: "success",
                data: user
            })
        }
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error
        })
    }
}

const getAllUsers = async (req, res) => {

    try {
        const usersdata = await users.find({});
        res.status(200).json({
            status: "success",
            data: usersdata
        })
} catch (error) {
    console.log(error);
        res.status(400).json({
            status: "fail",
            message: error
        })
}
}

module.exports = { createUser, getAllUsers }