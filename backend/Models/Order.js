import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    name: String,
    address: String,
    contactNumber: String,
    paymentMethod: String,
    product: {
        productName: String,
        price: Number,
        img: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


export const Order = mongoose.model("Order", orderSchema);
