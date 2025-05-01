import { useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
// import { useSearchParams } from "react-router-dom"
const NavBar = () => {
    const { cart, wishData ,buyNow } = useSelector((state) => state.cart)
    const [color, setColor] = useState("red")

    const handleTab = () => {
        setColor(color)
    }

    const navigate = useNavigate()

    const handleLogout = () => {
        axios.get('http://localhost:9090/auth/logout')
            .then(res => {
                if (res.data.status) {
                    navigate("/Login")
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <nav className="f1 navbar navbar-expand-lg bg-body-tertiary navB">
                <div className="container-fluid navBar">
                    <Link className="navbar-brand nav-name" to="/HomePage">E-Commerce App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 av justify-content-end">
                            {/* <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link nav-name" onClick={handleTab} to="/Mobile">Mobiles</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link red nav-name" to="/Electronics">Electronics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-name" to="/Shoes">Shoes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-name" to="/TopOffer">Top Offer</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-name" to="/ContactUs" >Feedback</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-name" to="/BuyNow">Oders </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-name" to="/WishList">WishList : {wishData.length}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-name" to="/Cart" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                </svg> : {cart.length}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-name" to="/DisplayMobiles" >Seller</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link logout-tag" onClick={handleLogout} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                </svg> LogOut</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar