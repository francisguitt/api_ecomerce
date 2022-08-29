
import { Products } from '../models/productsModel.js';

export const registerProducts = async (req, res) => {

    try {

        if (req.body.name && req.body.description && req.body.category && req.body.price) {
            const { name, description, category, price } = req.body;
            const registerProducts = await Products.create({
                name, description, category, price
            });
            res.status(201).json({ registerProducts });
        } else {
            res.json({ Error: 'Dados não existente' })
        }


    } catch (error) {
        res.status(500).json({ "msg": error });
    }



}