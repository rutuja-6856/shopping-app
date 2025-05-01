// import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addToCart } from "../features/CartSlice"
import { addToWishList } from "../features/CartSlice"
import { useState } from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"
import { Dialog } from "@mui/material"
import PlaceOrderForm from "./PlaceOrderForm"

const TopOffer = () => {
  const { wishData } = useSelector((state) => state.cart)
  const [openPopUp, setOpenPopUp] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch()
  const handleClose = () => {
    setOpenPopUp(false);
    setSelectedProduct(null);
  };
  const data = [
    {
      id: 401,
      img1: <img src="https://5.imimg.com/data5/SELLER/Default/2021/9/ZO/MC/KM/93370416/new-apple-iphone-11-64gb-purple-500x500.jpg" alt="" />,
      name: 'Iphone 11',
      price: 39999,
      quantity: 1
    },
    {
      id: 402,
      img1: <img src="https://i.ebayimg.com/images/g/3R8AAOSwTaJi6Qyn/s-l1200.jpg" alt="" />,
      name: 'Samsung Z Flip',
      price: 79199,
      quantity: 1
    },
    {
      id: 403,
      img1: <img src="https://5.imimg.com/data5/SELLER/Default/2023/10/356127293/DS/BA/WQ/126530580/samsung-galaxy-s23-ultra-5g-cream-12gb-256gb-storage-99999.jpg" alt="" />,
      name: 'Samsung Galaxy S23',
      price: 69449,
      quantity: 1
    },
    {
      id: 404,
      img1: <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HQWW2?wid=4000&hei=4000&fmt=jpeg&qlt=95&.v=1681150922615" alt="" />,
      name: 'Apple Watch SE',
      price: 21969,
      quantity: 1
    },
    {
      id: 405,
      img1: <img src="https://www.jiomart.com/images/product/original/493692274/lg-185-litres-5-star-direct-cool-single-door-refrigerator-scarlet-charm-gl-d201ascu-digital-o493692274-p599232104-1-202303110928.jpeg?im=Resize=(420,420)" alt="" />,
      name: 'LG',
      price: 22690,
      quantity: 1
    },
    {
      id: 406,
      img1: <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/392290/03/sv01/fnd/EEA/fmt/png" alt="" />,
      name: 'Puma',
      price: 2299,
      quantity: 1
    },
    {
      id: 407,
      img1: <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/379978/01/sv01/fnd/IND/fmt/png/Puma-Wish-Max-Men's-Running-Shoes" alt="" />,
      name: 'Nike',
      price: 2969,
      quantity: 1
    },
    {
      id: 408,
      img1: <img src="https://oxygendigitalshop.com/media/cache/2500x0/catalog/product/s/a/sam_3_1_1692270166.webp" alt="" />,
      name: 'Samsung 189 L ',
      price: 19349,
      quantity: 1
    }
  ]

  const [filterData, setFilterData] = useState([])

  const handleLowFilter = () => {
    const lowFilter = data.filter((item) => {
      return item.price <= 10000
    })

    setFilterData(lowFilter)
  }
  const handleMediumFilter = () => {
    const mediumFilter = data.filter((item) => {
      return item.price > 10000 && item.price < 25000
    })
    setFilterData(mediumFilter)
  }
  const handleHighFilter = () => {
    const highFilter = data.filter((item) => {
      return item.price > 25000 && item.price < 80000
    })
    setFilterData(highFilter)
  }
  return (
    <>
      <NavBar />
      <div className="f2">
        <button onClick={() => handleLowFilter()} className="filter btn-f btn-r">Price 99 - 10000</button>
        <button onClick={() => handleMediumFilter()} className="filter btn-f btn-y">Price 10000 - 25000</button>
        <button onClick={() => handleHighFilter()} className="filter btn-f btn-g">Price 25000 - 80000</button>
        <h3 className='veg-h f1'>Top Offers : </h3>
        <ul className='veg'>
          {data.map((f, index) => (
            <li key={index} type='none' className='mr'>
              <div className="card" style={{ width: '18rem ', height: '430px' }} >
                {/* style="width: 18rem;" */}
                {f.img1}
                <div className="card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <h6 className="card-title card-data">{f.name} </h6>
                    {wishData?.some(item => item.id === f.id) ? (
                      <FavoriteIcon
                        sx={{ color: 'red', cursor: 'pointer' }}
                        onClick={() => dispatch(addToWishList(f))}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        sx={{ color: 'black', cursor: 'pointer' }}
                        onClick={() => dispatch(addToWishList(f))}
                      />
                    )}
                  </div>
                  {/* <h6 className="card-title card-data">{f.name} <svg onClick={() => dispatch(addToWishList(f))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill wish-icon" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                  </svg></h6> */}
                  <p className="card-text card-data">₹ {f.price}</p>
                  <button onClick={() => dispatch(addToCart(f))} type="button" className="mobileAddToCartBtn">Add to Cart</button>
                  <button type="button" className=" mobileBuyNowBtn" onClick={() => {
                    setOpenPopUp(true)
                    setSelectedProduct(f)
                  }} >Buy Now</button>
                </div>
              </div>

            </li>
          ))
          }
        </ul>
      </div>

      <div className="f2">
        <h3 className="veg-h f1">Filter Data : {filterData.length}</h3>
        <ul className='veg'>
          {filterData.map((f, index) => (
            <li key={index} type='none' className='mr'>
              <div className="card" style={{ width: '18rem ', height: '430px' }} >
                {/* style="width: 18rem;" */}
                {f.img1}

                <div className="card-body">
                  <h6 className="card-title card-data">{f.name} <svg onClick={() => dispatch(addToWishList(f))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill wish-icon" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                  </svg></h6>
                  <p className="card-text card-data">₹ {f.price}</p>
                  <button onClick={() => dispatch(addToCart(f))} type="button" className="mobileAddToCartBtn">Add to Cart</button>
                  <button type="button" className=" mobileBuyNowBtn" onClick={() => {
                    setOpenPopUp(true)
                    setSelectedProduct(f)
                  }} >Buy Now</button>
                </div>
              </div>

            </li>
          ))
          }
        </ul>
      </div>
      <Footer />
      {openPopUp &&
        <Dialog open={openPopUp} onClose={handleClose} backgroundColor={'red'}>
          <PlaceOrderForm onClose={handleClose} product={selectedProduct} />
        </Dialog>
      }
    </>
  )
}

export default TopOffer