import React from 'react'
import { useRef } from 'react'
import "./Join.css"
import emailjs from "@emailjs/browser"
const Join = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
     alert("Thankyou your email submited")
    emailjs.sendForm('service_c9jarh6', 'template_gmdf13s', form.current, 'Up1pY0d-jDAD4VQPc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='join' id='join-us'>
      <div className='left-j'>
      <hr/>
        <div>
        <span className='stroke-text'>READY TO</span>
        <span>LEVEl UP</span>
        </div>

        <div>
        <span>YOUR BODY</span>
        <span className='stroke-text'>WITH US?</span>
        </div>
      </div>
      <div className='right-j'>
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="email" name='user_email' placeholder='Enter your Email here' required />
          <button className='btn bttn-j'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
