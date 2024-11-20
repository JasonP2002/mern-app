import express from 'express';

import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //middleware, allows us to accept JSON in req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server running http://localhost:" + PORT);
})

