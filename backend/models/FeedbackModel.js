import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Feedbacks = db.define('feedbacks',{
    star: {
        type: DataTypes.INTEGER(1),
        allowNull: false
    },
    name:{
        type: DataTypes.STRING
    },
    message:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Feedbacks;