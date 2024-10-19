import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';


dotenv.config();


const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);



mongoose.connect(process.env.MONGODB_URI, {
})
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

app.get('/', (req, res) => {
    res.send('API funcionando');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
