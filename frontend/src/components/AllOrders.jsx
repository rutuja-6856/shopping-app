import React, { useEffect, useState } from "react";
import axios from "axios";

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:9090/order/all")
            .then((res) => {
                setOrders(res.data);
            })
            .catch((err) => {
                console.error("Error fetching orders:", err);
            });
    }, []);

    return (
        <div style={{ padding: "20px" ,}} >
            <h2>All Orders</h2>
            
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                
                orders?.map((order, index) => (
                    <div key={index} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px", borderRadius:'10px',  }}>
                        <h4>Order by: {order.name}</h4>
                        <p><strong>Address:</strong> {order?.address}</p>
                        <p><strong>Contact:</strong> {order?.contactNumber}</p>
                        <p><strong>Payment Method:</strong> {order?.paymentMethod}</p>
                        <p><strong>Ordered Product:</strong> {order?.product?.productName}</p>
                        <p><strong>Price:</strong> ₹{order?.product?.price}</p>
                        <img src={order?.product?.img} alt={order?.product?.productName} width="100" />
                    </div>
                ))
            )}
        </div>
    );
};

export default AllOrders;
