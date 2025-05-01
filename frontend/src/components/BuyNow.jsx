import React, { useState } from 'react'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import NavBar from "./NavBar"
import { getCartTotal } from "../features/CartSlice"
import { Dialog } from '@mui/material'
import PlaceOrderForm from './PlaceOrderForm'
import AllOrders from './AllOrders'

export const BuyNow = () => {
    const { buyNow } = useSelector((state) => state.cart)
    const [openPopUp, setOpenPopUp] = useState(false)
    const handleClose = () => {
        console.log('onclose click')
        setOpenPopUp(false); // Close the dialog
    };
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartTotal())
    }, [buyNow])
    return (
        <>
            <NavBar />
         
            <div className="f2">
                <ul className='veg'>
                    {/* {buyNow.map((f, index) => (
                        <li key={index} type='none' className='mr'>
                            <div className="card" style={{ width: '300px ', height: '430px' }} >
                                {f.img1}
                                <div className="card-body">
                                    <h6 className="card-title card-data">{f.name}</h6>
                                    <p className="card-text card-data">₹ {f.price}</p>
                                    <p className="card-text card-data"> {f.quantity}</p>
                                    <button type="button" className="CartBuyNowBtn" onClick={() => setOpenPopUp(true)}>Buy Now</button>
                                </div>
                            </div>
                        </li>
                    )) */}
                    {/* } */}

                    <AllOrders />
                </ul>
            </div>

        </>

    )
}
