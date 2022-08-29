import {  DataTypes } from "sequelize";
import { sequelize } from '../instances/pg.js';

export const Products = sequelize.define('Products', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    description: {
        type: DataTypes.STRING,
        allowNull:false
    },
    category: {
        type: DataTypes.STRING,
        allowNull:false
    },
    price: {
        type: DataTypes.NUMBER,
        allowNull:false
    }
}, {

    tableName: 'products',
    timestamps: false
})