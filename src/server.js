import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(cors());
import { router } from './routers/index.js';


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', router)


app.use((req, res) => {
    res.status(404).json({ 'Error': 'Páge not found' });
})

app.listen(process.env.PORT, () => {
    console.log(`Running on ${process.env.PORT}`)
})