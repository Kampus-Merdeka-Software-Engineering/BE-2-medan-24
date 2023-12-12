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
        const { email } = req.body;

        // Cek apakah email sudah pernah dikirim sebelumnya
        const existingOffering = await Offering.findOne({
            where: {
                email: email
            }
        });

        if (existingOffering) {
            // Jika email sudah ada, kirim respons bahwa email sudah pernah dikirim
            return res.status(400).json({ msg: "Email has already been sent previously." });
        }

        // Jika email belum pernah dikirim, tambahkan ke database
        await Offering.create({
            email: email
        });

        res.status(201).json({ msg: "You get a special offer from us!" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};


