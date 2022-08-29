import { Router } from "express";
export const router = Router();

import { Auth } from "../Auth/index.js";
import { registerProducts } from '../controllers/registerProducts.js';
import { listProducts } from '../controllers/listProducts.js';
import { alterProducts } from '../controllers/alterProducts.js'
import { deleteProducts } from "../controllers/deleteProducts.js";


router.post('/register', Auth.private, registerProducts);
router.get('/list',  listProducts);
router.put('/alter/:id', Auth.private, alterProducts);
router.delete('/remove/:id', Auth.private, deleteProducts);