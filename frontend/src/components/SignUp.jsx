// import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom"

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault()
        axios.post('http://localhost:9090/auth/signup', {
            name: name,
            email: email,
            password: password
        })
            .then(e => {
                console.log(e)
                if (e.data === "signup") {
                    navigate('/Login')
                }
            })
            .catch(e => console.log(e))
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
                                <Link className="nav-link nav-name" to="/SignUp">SignUp</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> <div style={{ height:"auto", width:"100%", display:"flex", justifyContent:"center", alignItems:"center" , flexDirection:"column"}}> 

            
            <h1 className="veg-h mr f1" style={{marginBottom:"-10px"}}>SignUp</h1>
            <form className="f2 login-form signup" onSubmit={handleSignUp} autoComplete="off" >
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} className="form-control brd pass-len" autoComplete="false" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} className="form-control brd pass-len" autoComplete="false" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} className="form-control brd pass-len" autoComplete="false" required />
                </div>
                <button type="submit" className="btn-signup">SignUp</button><br /><br />
                <div className='clr'>Already have Account..!!</div>
                <Link to="/Login" type="submit" className="btn btn-login">Login</Link>
            </form>
            </div>
        </>
    )
}

export default SignUp