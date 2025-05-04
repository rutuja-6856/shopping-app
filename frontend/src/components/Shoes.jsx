// import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addToCart } from "../features/CartSlice"
import { addToWishList } from "../features/CartSlice"
import { useState, useEffect } from "react"
import axios from "axios"
import Footer from "./Footer"
import NavBar from "./NavBar"
import PlaceOrderForm from "./PlaceOrderForm"
import { Dialog } from "@mui/material"

const Shoes = () => {
  const dispatch = useDispatch()
  const { wishData } = useSelector((state) => state.cart)
  const [openPopUp, setOpenPopUp] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleClose = () => {
    setOpenPopUp(false);
    setSelectedProduct(null);
  };
  // const data = [
  //   {
  //     id: 301,
  //     img1: <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/990b2918-fb2f-43d5-bf14-a7373d3e2a2d/court-vision-low-next-nature-shoes-Hz0K6n.png" alt="" />,
  //     name: 'Nike',
  //     price: 2349,
  //     quantity: 1
  //   },
  //   {
  //     id: 302,
  //     img1: <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/de5192d6-02e8-44ba-ad40-33fdb2c738e7/zoom-vomero-5-se-shoes-WWDBV1.png" alt="" />,
  //     name: 'Nike',
  //     price: 3229,
  //     quantity: 1
  //   },
  //   {
  //     id: 303,
  //     img1: <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/379978/01/sv01/fnd/IND/fmt/png/Puma-Wish-Max-Men's-Running-Shoes" alt="" />,
  //     name: 'Puma',
  //     price: 2969,
  //     quantity: 1
  //   },
  //   {
  //     id: 304,
  //     img1: <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/392290/03/sv01/fnd/EEA/fmt/png" alt="" />,
  //     name: 'Puma',
  //     price: 2299,
  //     quantity: 1
  //   },
  //   {
  //     id: 305,
  //     img1: <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377045/02/sv01/fnd/IND/fmt/png/SOFTRIDE-Pro-Women's-Running-Shoes" alt="" />,
  //     name: 'Puma',
  //     price: 3949,
  //     quantity: 1
  //   },
  //   {
  //     id: 306,
  //     img1: <img src="https://5.imimg.com/data5/YZ/GX/TT/SELLER-91887504/puma-sneakers.jpeg" alt="" />,
  //     name: 'Puma',
  //     price: 1999,
  //     quantity: 1
  //   },
  //   {
  //     id: 307,
  //     img1: <img src="https://www.jiomart.com/images/product/original/rvjzfflvpe/asian-creta-12-grey-shoes-product-images-rvjzfflvpe-0-202203231314.jpg?im=Resize=(500,630)" alt="" />,
  //     name: 'Asian',
  //     price: 1690,
  //     quantity: 1
  //   },
  //   {
  //     id: 308,
  //     img1: <img src="https://m.media-amazon.com/images/I/6125OSYtlFL._SL1100_.jpg" alt="" />,
  //     name: 'Asian',
  //     price: 2799,
  //     type: 'Veg',
  //     quantity: 1
  //   }
  // ]

  const data = [
    {
      id: 301,
      img1: <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/990b2918-fb2f-43d5-bf14-a7373d3e2a2d/court-vision-low-next-nature-shoes-Hz0K6n.png" alt="" />,
      name: 'Nike',
      price: 2349,
      quantity: 1,
      description: 'Nike Court Vision Low shoes with classic basketball style, durable upper, and eco-friendly materials.'
    },
    {
      id: 302,
      img1: <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/de5192d6-02e8-44ba-ad40-33fdb2c738e7/zoom-vomero-5-se-shoes-WWDBV1.png" alt="" />,
      name: 'Nike',
      price: 3229,
      quantity: 1,
      description: 'Nike Zoom Vomero 5 SE shoes designed for superior cushioning, lightweight feel, and all-day comfort.'
    },
    {
      id: 303,
      img1: <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/379978/01/sv01/fnd/IND/fmt/png/Puma-Wish-Max-Men\'s-Running-Shoes" alt="" />,
      name: 'Puma',
      price: 2969,
      quantity: 1,
      description: 'Puma Wish Max running shoes for men with breathable mesh upper, lightweight design, and enhanced grip.'
    },
    {
      id: 304,
      img1: <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/392290/03/sv01/fnd/EEA/fmt/png" alt="" />,
      name: 'Puma',
      price: 2299,
      quantity: 1,
      description: 'Puma sneakers with a sleek silhouette, cushioned sole, and versatile style for everyday wear.'
    },
    {
      id: 305,
      img1: <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377045/02/sv01/fnd/IND/fmt/png/SOFTRIDE-Pro-Women\'s-Running-Shoes" alt="" />,
      name: 'Puma',
      price: 3949,
      quantity: 1,
      description: 'Puma Softride Pro running shoes for women, offering soft cushioning and premium support for long runs.'
    },
    {
      id: 306,
      img1: <img src="https://5.imimg.com/data5/YZ/GX/TT/SELLER-91887504/puma-sneakers.jpeg" alt="" />,
      name: 'Puma',
      price: 1999,
      quantity: 1,
      description: 'Classic Puma sneakers with timeless design, durable construction, and comfortable fit.'
    },
    {
      id: 307,
      img1: <img src="https://www.jiomart.com/images/product/original/rvjzfflvpe/asian-creta-12-grey-shoes-product-images-rvjzfflvpe-0-202203231314.jpg?im=Resize=(500,630)" alt="" />,
      name: 'Asian',
      price: 1690,
      quantity: 1,
      description: 'Asian Creta 12 grey shoes featuring breathable upper, lightweight design, and slip-resistant sole.'
    },
    {
      id: 308,
      img1: <img src="https://m.media-amazon.com/images/I/6125OSYtlFL._SL1100_.jpg" alt="" />,
      name: 'Asian',
      price: 2799,
      type: 'Veg',
      quantity: 1,
      description: 'Asian running shoes with cushioned midsole, sporty design, and comfortable fit for daily use.'
    }
  ]
  
  const [filterData, setFilterData] = useState([])

  const handleLowFilter = () => {
    const lowFilter = data.filter((item) => {
      return item.price <= 2000
    })

    setFilterData(lowFilter)
  }
  const handleMediumFilter = () => {
    const mediumFilter = data.filter((item) => {
      return item.price > 2000 && item.price < 3000
    })
    setFilterData(mediumFilter)
  }
  const handleHighFilter = () => {
    const highFilter = data.filter((item) => {
      return item.price > 3000 && item.price < 4000
    })
    setFilterData(highFilter)
  }

  const [shoes, setShoes] = useState([])

  const fetchMobileData = async () => {
    try {
      const response = await axios.get("http://localhost:9090/auth/getshoes")
      setShoes(response.data)
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
        <button onClick={() => handleLowFilter()} className="filter btn-f btn-r">Price 1000 - 2000</button>
        <button onClick={() => handleMediumFilter()} className="filter btn-f btn-y">Price 2000 - 3000</button>
        <button onClick={() => handleHighFilter()} className="filter btn-f btn-g">Price 3000 - 4000</button>
        <h3 className='veg-h f1'>Shoes : </h3>
        <ul className='veg'>
          {data.map((f, index) => (
            <li key={index} type='none' className='mr'>
              <div className="card" style={{ width: '18rem ', height: f?.description ? '500px' : '430px' }} >
                {/* style="width: 18rem;" */}
                {f.img1}
                <div className="card-body">
                  {/* <h6 >{f.name} <svg onClick={() => dispatch(addToWishList(f))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill wish-icon" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                  </svg></h6> */}
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <h6 >{f.name} </h6>
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
                  <p style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {f?.description}
                  </p>
                  <p className="card-text card-data">₹ {f.price}</p>
                  <button onClick={() => dispatch(addToCart(f))} type="button" className="mobileAddToCartBtn">Add to Cart</button>
                  <button type="button" className=" mobileBuyNowBtn"  onClick={() => {
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
          {shoes.map((f) => (
            <li key={f._id} type='none' className='mr'>
              <div className="card" style={{ width: '18rem ', height: f?.description ? '500px' : '430px' }} >
                {/* style="width: 18rem;" */}
                <img src={f.img} alt="Error" width={'288px'} height={'270px'} />

                <div className="card-body">
                  <h6 >{f.productName} <svg onClick={() => dispatch(addToWishList(f))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill wish-icon" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                  </svg></h6>
                  <p style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {f?.description}
                  </p>
                  <p className="card-text card-data">₹ {f.price}</p>
                  <button onClick={() => dispatch(addToCart(f))} type="button" className="mobileAddToCartBtn">Add to Cart</button>
                  <button type="button" className=" mobileBuyNowBtn" style={{ backgroundColor: 'red' }} onClick={() => {
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
              <div className="card" style={{ width: '18rem ', height: f?.description ? '500px' : '430px'}} >
                {/* style="width: 18rem;" */}
                {f.img1}

                <div className="card-body">
                  <h6 >{f.name} <svg onClick={() => dispatch(addToWishList(f))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill wish-icon" viewBox="0 0 16 16">
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                  </svg></h6>
                  <p style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {f?.description}
                  </p>
                  <p className="card-text card-data">₹ {f.price}</p>
                  <button onClick={() => dispatch(addToCart(f))} type="button" className="mobileAddToCartBtn">Add to Cart</button>
                  <button type="button" className=" mobileBuyNowBtn" style={{ backgroundColor: 'red' }} onClick={() => {
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

export default Shoes