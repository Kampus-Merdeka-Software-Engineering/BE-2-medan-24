import {  DataTypes } from "sequelize";
import db from "../config/Database.js";


const Offering = db.define("offering", {
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type:DataTypes.STRING,
    },
});

export default Offering;