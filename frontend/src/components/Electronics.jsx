import React from 'react'
import { Dialog } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../features/CartSlice"
import { addToWishList } from "../features/CartSlice"
import { useState, useEffect } from "react"
import axios from "axios"
import Footer from "./Footer"
import NavBar from "./NavBar"
import PlaceOrderForm from "./PlaceOrderForm"

const Electronics = () => {
  const { wishData } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [openPopUp, setOpenPopUp] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null);
  const data = [
    {
      id: 101,
      img1: <img src="https://oxygendigitalshop.com/media/cache/2500x0/catalog/product/s/a/sam_3_1_1692270166.webp" alt="" />,
      name: 'Samsung 189 L ',
      price: 19349,
      quantity: 1
    },
    {
      id: 102,
      img1: <img src="https://www.reliancedigital.in/medias/Haier-CBABBAM0S-Washing-Machines-491891863-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxOTY1ODV8aW1hZ2UvanBlZ3xpbWFnZXMvaDRmL2g5ZS85MzY2MzQ0MjA0MzE4LmpwZ3wzNjUzYzNlNmU3ODNjM2YyMzRiMzlkZWMyMTU1MGE5M2EzYTc4ZjhkMDg4NjU0NDcyYTA2MjRmOTUxYTljYjNk" alt="" />,
      name: 'Haier',
      price: 15229,
      quantity: 1
    },
    {
      id: 103,
      img1: <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HQWW2?wid=4000&hei=4000&fmt=jpeg&qlt=95&.v=1681150922615" alt="" />,
      name: 'Apple Watch SE',
      price: 21969,
      quantity: 1
    },
    {
      id: 104,
      img1: <img src="https://m.media-amazon.com/images/I/41vmLEDjc2L.jpg" alt="" />,
      name: 'Redragon Gaming Mouse',
      price: 1299,
      quantity: 1
    },
    {
      id: 105,
      img1: <img src="https://5.imimg.com/data5/SELLER/Default/2021/6/QB/RA/PO/115177401/amd-ryzen-3-4350g-gaming-pc-cpu-computer-.jpg" alt="" />,
      name: 'AMD Ryzen 3 4350g',
      price: 21449,
      quantity: 1
    },
    {
      id: 106,
      img1: <img src="https://m.media-amazon.com/images/I/7161CX7H8JL.jpg" alt="" />,
      name: 'Havells',
      price: 1199,
      quantity: 1
    },
    {
      id: 107,
      img1: <img src="https://www.jiomart.com/images/product/original/493692274/lg-185-litres-5-star-direct-cool-single-door-refrigerator-scarlet-charm-gl-d201ascu-digital-o493692274-p599232104-1-202303110928.jpeg?im=Resize=(420,420)" alt="" />,
      name: 'LG',
      price: 22690,
      quantity: 1
    },
    {
      id: 108,
      img1: <img src="https://www.aptronixindia.com/media/catalog/product/cache/e16cc9c2744816b243de32cfba0b1d13/m/i/midnight_2-removebg-preview.png" alt="" />,
      name: 'Apple Watch 7',
      price: 14799,
      type: 'Veg',
      quantity: 1
    }
  ]

  const [filterData, setFilterData] = useState([])

  const handleLowFilter = () => {
    const lowFilter = data.filter((item) => {
      return item.price <= 5000
    })

    setFilterData(lowFilter)
  }
  const handleClose = () => {
    setOpenPopUp(false);
    setSelectedProduct(null);
  };

  const handleMediumFilter = () => {
    const mediumFilter = data.filter((item) => {
      return item.price > 5000 && item.price < 15000
    })
    setFilterData(mediumFilter)
  }
  const handleHighFilter = () => {
    const highFilter = data.filter((item) => {
      return item.price > 15000 && item.price < 25000
    })
    setFilterData(highFilter)
  }

  const [electronics, setElectronics] = useState([])

  const fetchMobileData = async () => {
    try {
      const response = await axios.get("http://localhost:9090/auth/getelectronics")
      setElectronics(response.data)
    } catch (error) {
      console.log('Error during fetching data :', error)
    }
  }

  useEffect(() => {
    fetchMobileData()
  }, [])


  return (
    <>
      <NavBar />
      <div className="f2">
        <button onClick={() => handleLowFilter()} className="filter btn-f btn-r">Price 999 - 5000</button>
        <button onClick={() => handleMediumFilter()} className="filter btn-f btn-y">Price 5000 - 15000</button>
        <button onClick={() => handleHighFilter()} className="filter btn-f btn-g">Price 15000 - 25000</button>
        <h3 className='veg-h f1'>Electronics : </h3>
        <ul className='veg'>
          {data.map((f, index) => (
            <li key={index} type='none' className='mr'>
              <div className="card" style={{ width: '18rem ', height: '430px' }} >
                {/* style="width: 18rem;" */}
                {f.img1}
                <div className="card-body" >
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
        {/* <h3 className="veg-h f1">Filter Data : {filterData.length}</h3> */}
        <ul className='veg'>
          {electronics.map((f, index) => (
            <li key={index} type='none' className='mr'>
              <div className="card" style={{ width: '18rem ', height: '430px' }} >
                {/* style="width: 18rem;" */}
                <img src={f.img} alt="Error" width={'288px'} height={'270px'} />

                <div className="card-body">
                  <h6 className="card-title card-data">{f.productName}
                     <svg onClick={() => dispatch(addToWishList(f))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill wish-icon" viewBox="0 0 16 16">
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

export default Electronics