import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },//cek lagi
    description: { type: String, required: true },
},
    {
        timestamps: true,
    },
)

export const Product = mongoose.model('Product', productSchema);