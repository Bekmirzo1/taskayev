import mysql2 from "mysql2";
import { Sequelize } from "sequelize";

console.log(process.env.MY_DB_HOST);

export default new Sequelize(
  process.env.MY_DB_NAME, // Название БД
  process.env.MY_DB_USER, // Пользователь
  process.env.MY_DB_PASSWORD, // Пароль
  {
    dialect: 'mysql', // Диалект. SQL dialects are essentially different versions of the SQL language,
    dialectModule: mysql2,
    host: process.env.MY_DB_HOST,
    port: +process.env.MY_DB_PORT,
  }
)