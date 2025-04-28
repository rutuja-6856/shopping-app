import React, { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function PlaceOrderForm({ onClose }) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cash-on-delivery');
    const [successPopupOpen, setSuccessPopupOpen] = useState(false); // To control success popup

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission, for example, an API call or cart update
        console.log({
            name,
            address,
            contactNumber,
            paymentMethod,
        });

        // Open the success popup
        setSuccessPopupOpen(true);

        // Close the dialog by calling onClose after a brief delay to show success
        setTimeout(() => {
            onClose(); // Close the main dialog after success popup
        }, 1500); // Delay to let the success popup appear for 1.5 seconds
    };

    const handleSuccessClose = () => {
        setSuccessPopupOpen(false); // Close success popup
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
