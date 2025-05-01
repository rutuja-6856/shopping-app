// import express from "express";
// import { Order } from "../Models/Order.js";

// const router = express.Router();

// router.post("/place", async (req, res) => {
//   try {
//     const { name, address, contactNumber, paymentMethod } = req.body;
//     const newOrder = new Order({ name, address, contactNumber, paymentMethod , product });
//     await newOrder.save();
//     res.status(201).json({ message: "Order saved successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to save order." });
//   }
// });

// export default router;
import express from "express";
import { Order } from "../Models/Order.js";

const router = express.Router();

router.post("/place", async (req, res) => {
    try {
        const { name, address, contactNumber, paymentMethod, product } = req.body;
        console.log('product', product)

        const newOrder = new Order({
            name,
            address,
            contactNumber,
            paymentMethod,
            product,
        });

        await newOrder.save();
        res.status(201).json({
            message: "Order saved successfully!",
            data: { ...newOrder }
        });
    } catch (error) {
        console.error("Order Error:", error);
        res.status(500).json({ error: "Failed to save order." });
    }
});
// GET all orders
router.get("/all", async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 }); // latest first
        res.status(200).json(orders);
    } catch (error) {
        console.error("Fetch Orders Error:", error);
        res.status(500).json({ error: "Failed to fetch orders." });
    }
});


export default router;

