import mongoose from 'mongoose'; // Import mongoose library

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true // createdAt, updatedAt
});

const Product = mongoose.model('Product', productSchema);

export default Product; // Export the Product model as the default export
