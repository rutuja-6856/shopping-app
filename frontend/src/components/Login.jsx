// import React from 'react'
import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    axios.defaults.withCredentials = true
    const handleLogin = (e) => {
        e.preventDefault()
        axios.post('http://localhost:9090/auth/login',
            {
                email: email,
                password: password
            })
            .then(result => {
                console.log(result)
                if (result.data.status) {
                    navigate("/HomePage")
                }
            })
            .catch(err => console.log(err))
    }

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
                                <Link className="nav-link nav-name" to="/Login">logIn</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav><div style={{ height:"auto", width:"100%", display:"flex", justifyContent:"center", alignItems:"center" , flexDirection:"column"}}>

            <h1 className="veg-h mr f1" style={{marginBottom:"-10px"}}>Login</h1>
            <form className="f2 login-form login" method="POST" onSubmit={handleLogin} autoComplete="off" >
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" autoComplete="false" className="form-control brd pass-len" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="text" name="password" autoComplete="false" className="form-control brd pass-len" required />
                </div>
                <button type="submit" className="btn btn-login">Login</button><br /><br />
                <Link className="forgot-p" to='/forgotPassword'>Forgot Password</Link>
                <div>Account is not created</div>
                <Link to="/SignUp" type="submit" className="btn btn-signup">SigUp</Link>
            </form>
            </div>
        </>
    )
}

export default Login