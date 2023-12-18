import React from 'react'
import { FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import "./Contact.css"
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';
const Contact = () => {
  return (
    <>
    <div className=" contact" id="contact">
        <div className="card card0 border-0">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <Flip left>

                    <div className="card1">
                        <div className="row border-line">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrea3SUqqCpyJXsuiVEUGFhZOYJdJobiVKA&usqp=CAU" alt="contact" className='image' />

                        </div>
                    </div>

                    </Flip>
                </div>
                <div className="col-lg-6 col-md-6">
                    <Rotate>

                    <div className="card2 d-flex card border-0 px-4 py-5">
                    <div className="row">
                        <div className="row">
                            <Fade left>

                        <h6>Contact With 
                        <FaLinkedin color='blue' className='ms-2' size={30}/>
                        <FaGithub color='black' className='ms-2' size={30}/>
                        <FaFacebookSquare color='blue' className='ms-2' size={30}/>
                        <FaInstagramSquare color='purple' className='ms-2' size={30}/>
                        <FaWhatsappSquare color='green' className='ms-2' size={30}/>
                        </h6>
                            </Fade>
                        </div>
                        

                        <div className="row px-3 mb-4">
                            <div className="line" />
                                <small className="or text-center">OR</small>
                            <div className="line" />
                            </div>
                            <div className="row px-3">
                            <input type="text" name='name' placeholder='your name' className='mb-3'/>
                            </div>
                            <div className="row px-3">
                            <input type="email" name='name' placeholder='your email' className='mb-3'/>
                            </div>
                            <div className="row px-3">
                            <textarea type="text" name='msg' placeholder='Write your message' className='mb-3'/>
                            </div>
                            <div className="row px-3">
                                <button className='button' type='submit'>SEND MESSAGE</button>
                            </div>
                        </div>
                    </div>
                    </Rotate>
                </div>
                </div>
            </div>
        </div>
       
    </>
  )
}

export default Contact
