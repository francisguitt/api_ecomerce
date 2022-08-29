import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(
    process.env.PG_DB,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
    {

        host: process.env.PG_HOST,
        dialect: "postgres",
        port: parseInt(process.env.PG_PORT)
    }
)