import User from "../models/UserModel.js";

export const getUsers = async(req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getUserById = async(req, res) => {
    try {
        const response = await User.findOne({
            where: {
                booking_id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}


export const editUser = async (req, res) => {
    const cekId = await User.findByPk(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        editedUser = await User.updateOne({booking_id: req.params.id}, {$set: req});
        res.status(200).json(editedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


export const deleteUser = async(req, res) =>{
    const cekId = await User.findByPk(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        await User.destroy({
            where:{
                booking_id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
