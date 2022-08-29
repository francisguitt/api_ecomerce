import { Products } from '../models/productsModel.js';
export const alterProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, category, price } = req.body;
        const updateProducts = await Products.findOne({ where: { id: id } });
        if (!updateProducts) {
            res.status(404).json({ msg: 'Produto não  econtrado !' });
        } else {
            await Products.update({ name, description, category, price }, { where: { id: id } });
            res.status(200).json({ msg: updateProducts });
        }
    } catch (error) {
        res.status(400).json({ msg: error });
    }
}