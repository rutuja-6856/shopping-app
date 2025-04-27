// import React from 'react'
import { useState } from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"
const ContactUs = () => {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [feedback, setFeedback] = useState("")
    const [userInfo, setUserInfo] = useState([])

    const handleFeedback = () => {
        setUserInfo([{ id: Date.now(), name: name, number: number, feedback: feedback }, ...userInfo])
        console.log(userInfo)
        setName("")
        setNumber("")
        setFeedback("")
    }
    return (
        <>
        <NavBar/>
            <div className='User-data f2 contact-data'>
                <h1 className='veg-h f1'>Feedback : </h1>
                <div className='veg-h f-width '>
                    <p>We value your feedback! Whether you have a question, suggestion, or just want to say hello, we are here to listen. Please feel free to reach out to us using any of the methods below. Your input helps us improve and better serve your needs.</p>
                </div>
                <div className="UserF">
                    <strong>Name :</strong>  <input className='uinput' type="text" placeholder='Enter Name..'value={name}  onChange={(e) => { setName(e.target.value) }} /> <br />
                    <strong>Number :</strong> <input className='uinput' type="text" placeholder='Enter Number..'value={number} onChange={(e) => { setNumber(e.target.value) }} /> <br />
                    <strong>Feedback :</strong> <textarea rows="2" cols="30" className='uinput' type="text" placeholder='Enter Feedback..' value={feedback} onChange={(e) => { setFeedback(e.target.value) }} /> <br />
                    <button type='button' className='ubtn' onClick={handleFeedback}>Submit</button>
                </div>
            </div>

            <ul className='UData f2'>
                {/* <h4 >DataBase Info : </h4> <br /> */}
                {
                    userInfo.map((data, index) => (
                        // <div>
                        <li className='demoU' key={index}>
                            <p><strong>Name : </strong> {data.name}</p>
                            <p><strong>Number : </strong> {data.number}</p>
                            <p><strong>Feedback : </strong> {data.feedback}</p>
                            {/* <p>Order Pending</p> */}
                        </li>
                        // </div>
                    ))
                }
            </ul>
            <Footer/>
        </>
    )
}

export default ContactUs