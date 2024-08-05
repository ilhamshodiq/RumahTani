import express from "express";
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose";
import productRoute  from "./routes/productRoute.js";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json())

// Middleware for handling CORS POLICY
// app.use(cors())
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}))


app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Hello World')
});

app.use('/products', productRoute)

// Connect to MongoDB
mongoose.connect(mongoDBURL).then(() => {
    console.log('Connected to database MongoDB')
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    });
}).catch((err) => {
    console.log('Error:', err)
})