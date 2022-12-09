
import React, { useRef, useState } from "react";
import "./Contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] =useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_oel3aem', 'template_rz0wwlw', formRef.current, 'uOEZu1fDeZRQbIEq6')
    .then((result) => {
        console.log(result.text);
        e.target.reset()
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className="contact">
      <div className="line"></div>
      <div className="contact-wrapper">
      <div className="left">
      <div class="letter-image">
	<div class="animated-mail">
		<div class="back-fold"></div>
		<div class="letter">
			<div class="letter-border"></div>
			<div class="letter-title"></div>
			<div class="letter-context"></div>
			<div class="letter-stamp">
				<div class="letter-stamp-inner"></div>
			</div>
		</div>
		<div class="top-fold"></div>
		<div class="body"></div>
		<div class="left-fold"></div>
	</div>
	<div class="shadow"></div>
</div>
      </div>
      <div className="right">
        <p className="contact-info">
          <b>What's your tune?</b> Contact us below with any questions, comments, or just to say, "What's up?"!
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name..." name="user_name" />
          <input type="text" placeholder="Email..." name="user_email" />
          <input type="text" placeholder="Subject..." name="user_subject" />
          <textarea rows="10" placeholder="Type your message here..." name="message" />
          <button type="submit">Submit</button>
          <div className="thanks">
          {done && "Thank you...We'll be in touch!"}
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}
