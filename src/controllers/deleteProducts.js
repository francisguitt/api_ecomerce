import { Products } from '../models/productsModel.js';
export const deleteProducts = async(req, res) => {
    try {
        const { id } = req.params;
        const removeProducts = await Products.findOne({ where: { id: id } });
        if (!removeProducts) {
            res.status(404).json({ msg: 'Produto não encontrado !' });
        }
        else {
            await Products.destroy({ where: { id: id } });
            res.status(200).json({ msg: 'Produto Deletado com sucesso !' });
        }
    } catch (error) {
        res.status(404).json({ msg: error });
    }

}