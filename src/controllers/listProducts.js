
import { Products } from '../models/productsModel.js';

export const listProducts = async (req, res) => {
    const productsList = await Products.findAll({});
    
    res.json({ productsList });
}