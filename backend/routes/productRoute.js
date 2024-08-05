import express from 'express'
import { Product } from "../models/ProductModel.js";

const router = express.Router()

// Route for create products
router.post('/', async (req, res) => {
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
router.get('/', async (req, res) => {
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
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        return res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route to update a product
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.name || !req.body.price || !req.body.description) {
            return res.status(400).send('Please fill all the fields');
        }
        const { id } = req.params;
        const result = await Product.findByIdAndUpdate(id, req.body)

        if (!result) {
            return response.status(404).json({ message: 'Product not found' })
        }

        return res.status(200).json({ message: 'Product updated!' })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}
)

// Route to delete a product
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Product.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json({ message: 'Product deleted!' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}
)

export default router