import express from 'express';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

const app = express();
app.use(express.json()); //middleware, allows us to accept JSON in req.body

app.post("/api/products", async (req, res) => {
    const product = req.body; //user sends this

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct});
    } catch (error) {
        console.error("ERROR:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
})

app.listen(5000, () => {
    connectDB();
    console.log("Server running");
})

