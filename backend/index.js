import express from "express";
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose";
import { Product } from "./models/ProductModel.js";

const app = express();

// Middleware
app.use(express.json())

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Hello World')
});

// Route for create products
app.post('/products', async (req, res) => {
    try {
        if (!req.body.name || !req.body.price || !req.body.description) {
            return res.status(400).send('Please fill all the fields')
        }
        const newProduct = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }
        const product = await Product.create(newProduct)

        return res.status(201).send(product)
    } catch (error) {
        console.log('Error:', error.message)
        return res.status(500).send({ message: error.message })
    }
})

// Route to get all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({})
        return res.status(200).json(
            {
                count: products.length,
                data: products,
            }
        )
    } catch (error) {
        console.log('Error:', error.message)
        return res.status(500).send({ message: error.message })
    }
})
// Route to get product by id
app.get('/products/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const product = await Product.findById(id);
  
      return res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  

// Connect to MongoDB
mongoose.connect(mongoDBURL).then(() => {
    console.log('Connected to database MongoDB')
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    });
}).catch((err) => {
    console.log('Error:', err)
})