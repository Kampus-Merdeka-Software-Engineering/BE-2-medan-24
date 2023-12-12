import {  DataTypes } from "sequelize";
import db from "../config/Database.js";

const User = db.define("users", {
    booking_id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    table: {
        type:DataTypes.STRING,
    },
    hours: {
        type:DataTypes.STRING,
    },
    name: {
        type:DataTypes.STRING,
    },
    email: {
        type:DataTypes.STRING,
    },
    date: {
        type:DataTypes.DATEONLY,
    },
    person: {
        type:DataTypes.STRING,
    },
    specialRequest: {
        type:DataTypes.STRING,
    },
    }, {
        freezeTableName: true,
        timestamps: false
});

export default User;