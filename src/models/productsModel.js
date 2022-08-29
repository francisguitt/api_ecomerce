import {  DataTypes } from "sequelize";
import { sequelize } from '../instances/pg.js';

export const Products = sequelize.define('Products', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.NUMBER
    }
}, {

    tableName: 'products',
    timestamps: false
})