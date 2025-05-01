import React, { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function PlaceOrderForm({ onClose, product }) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cash-on-delivery');
    const [successPopupOpen, setSuccessPopupOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const orderData = {
        //     name,
        //     address,
        //     contactNumber,
        //     paymentMethod,
        // };
        console.log('product', product)
        const orderData = {
            name,
            address,
            contactNumber,
            paymentMethod,
            product: {
                productName: product?.name,
                price: product?.price,
                img: product?.img1?.props?.src,
            }
        };


        try {
            const response = await fetch("http://localhost:9090/order/place", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessPopupOpen(true);
                setTimeout(() => {
                    onClose();
                }, 1500);
            } else {
                alert(data.error || "Order failed");
            }
        } catch (error) {
            console.error("Order Error:", error);
            alert("Something went wrong while placing the order.");
        }
    };


    const handleSuccessClose = () => {
        setSuccessPopupOpen(false);
    };

    return (
        <Box sx={{ padding: 2, width: 400 }}>
            <Typography variant="h4" p={1} sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                Place Your Order
            </Typography>
            <Box sx={{ mt: '10px' }}>
                <form onSubmit={handleSubmit} sx={{ mt: '10px' }}>
                    {/* Name */}
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{ marginBottom: 2 }}
                    />

                    {/* Address */}
                    <TextField
                        label="Address"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        sx={{ marginBottom: 2 }}
                    />

                    {/* Contact Number */}
                    <TextField
                        label="Contact Number"
                        variant="outlined"
                        fullWidth
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        sx={{ marginBottom: 2 }}
                    />

                    {/* Payment Method */}
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel>Payment Method</InputLabel>
                        <Select
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            label="Payment Method"
                        >
                            <MenuItem value="cash-on-delivery">Cash on Delivery</MenuItem>
                            {/* Add more payment options if needed */}
                        </Select>
                    </FormControl>

                    {/* Submit Button */}
                    <Button type="submit" variant="contained" fullWidth color="primary">
                        Confirm Order
                    </Button>
                </form>
            </Box>

            {/* Success Popup */}
            <Dialog open={successPopupOpen} onClose={handleSuccessClose}>


                <DialogContent sx={{ textAlign: 'center' }}>
                    <CheckCircleIcon sx={{ color: 'green', fontSize: 80, marginBottom: 2 }} />
                    <DialogTitle>Order Placed Successfully!</DialogTitle>
                    <Typography variant="body1">Your order has been successfully placed. Thank you!</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSuccessClose} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default PlaceOrderForm;
