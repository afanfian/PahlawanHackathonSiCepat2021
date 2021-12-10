import { Sequelize } from "sequelize";

const db = new Sequelize("si_feedback", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

export default db;