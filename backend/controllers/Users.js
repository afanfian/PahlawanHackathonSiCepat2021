import Users from "../models/UserModel.js";

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req, res) => {
    const { username, name, password, confPassword } = req.body;
    if(password != confPassword)
        return res.status(400).json({msg: "Password and Confirm Password not match."})
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        try {
            await Users.create({
                username: username,
                name: name,
                password: hashPassword
            });
            res.json({msg: "Register successful."});
        } catch (error) {
            console.log(error);
        }
}

export const Login = async(req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                username: req.body.username
            }
        });
    } catch (error) {
        res.status(404).json({msg: "Username not found."});
    }
}