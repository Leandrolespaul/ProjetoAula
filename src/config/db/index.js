import { Sequelize } from "sequelize";


export default new Sequelize({
    "username": "root",
    "password": "Wiandara123",
    "database": "vendas",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql",
    "timezone": "-03:00",
    "define": { "timestamps": true, "underscored": true }
});
