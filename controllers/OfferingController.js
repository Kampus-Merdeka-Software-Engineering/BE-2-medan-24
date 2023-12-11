import Offering from "../models/Offering.js";


export const getOffering = async(req, res) => {
    try {
        const response = await Offering.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createOffering = async (req, res) => {
    try {
        const {email} = req.body;
        await Offering.create({
            email: email
        });
        res.status(201).json({msg: "You get a special offer from us!"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}



