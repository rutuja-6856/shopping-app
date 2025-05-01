// import React from 'react'
import { addToCart, } from "../features/CartSlice"
import { removeWishItem } from "../features/CartSlice"
import { useDispatch, useSelector } from "react-redux"
import Footer from "./Footer"
import NavBar from "./NavBar"

const WishList = () => {
  const { wishData } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  return (
    <>
      <NavBar />
      <h3 className="veg-h f1">Wish List Data : {wishData.length}</h3>
      <div className="f2">
        <ul className='veg'>
          {wishData.map((f, index) => (
            <li key={index} type='none' className='mr'>
              <div className="card" style={{ width: '18rem ', height: '430px' }} >
                {/* style="width: 18rem;" */}
                {f.img1}
                {/* <img src={f.img} width={'288px'} height={'250px'} /> */}
                <div className="card-body">
                  <h6 className="card-title card-data">{f.name || f.productName} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" onClick={() => dispatch(removeWishItem(f.id))} className="bi bi-trash3-fill wish-delete" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                  </svg></h6>
                  <p className="card-text card-data">₹ {f.price}</p>
                  <button onClick={() => dispatch(addToCart(f))} type="button" className="mobileAddToCartBtn">Add to Cart</button>
                  <button type="button" className=" mobileBuyNowBtn">Buy Now</button>
                </div>
              </div>

            </li>
          ))
          }
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default WishList