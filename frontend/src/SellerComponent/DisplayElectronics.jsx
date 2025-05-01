// import React from 'react'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Footer from "../components/Footer"
const DisplayElectronics = () => {
    const [electronicsData, setElectronicsData] = useState([])

    const fetchMobileData = async () => {
        try {
            const response = await axios.get("http://localhost:9090/auth/getelectronics")
            setElectronicsData(response.data)
        } catch (error) {
            console.log('Error during fetching data :', error)
        }
    }

    useEffect(() => {
        fetchMobileData()
    }, [])
    return (
        <>
            <nav className="f1 navbar navbar-expand-lg bg-body-tertiary navB">
                <div className="container-fluid navBar">
                    <Link className="navbar-brand nav-name" to="/">E-Commerce App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link nav-name" to="/DisplayMobiles">Mobile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-name" to="/DisplayElectronics">Electronics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-name" to="/DisplayShoes">Shoes</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="f2">
                <Link to="/AddElectronics" className="btn add-mobiles"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                </svg> Add Electronics</Link>
                <h3 className='veg-h f1'>Electronics   : </h3>
                <ul className='veg'>
                    {electronicsData.map((f, index) => (
                        <li key={index} type='none' className='mr'>
                            <div className="card" style={{ width: '18rem ', height: '430px' }} >
                                {/* style="width: 18rem;" */}
                                <img src={f.img} alt="Error" width={'287px'} height={'250px'} />

                                <div className="card-body">
                                    <br />
                                    <p className="card-data"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill wish-delete" viewBox="0 0 16 16">
                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                    </svg></p>
                                    <h6 className="card-title card-data">{f.productName}</h6>
                                    <p className="card-text card-data">₹ {f.price}</p>
                                    <Link className="btn card-data Edit-btn" to={`/editShoes/${f._id}`}>Edit Data</Link>
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

export default DisplayElectronics