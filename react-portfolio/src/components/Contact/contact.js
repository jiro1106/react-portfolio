import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();  
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_c7hqg4i', 'template_i0o9x5b', form.current, { 
            publicKey: '2rKJ7SdT1I9EodVr-',
        })
            .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
            );
    };
    
    return(
        <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">If you want to reach out to me, please fill out the form below!</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                <input type="email" className="email" placeholder='Your Email' name='from_email'/>
                <textarea className = 'msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt = "Facebook" className = "link" />
                    <img src={TwitterIcon} alt = "Twitter" className = "link" />
                    <img src={YoutubeIcon} alt = "Youtube" className = "link" />
                    <img src={InstagramIcon} alt = "Instagram" className = "link" />
                </div>
            </form>
        </div>
        </section>
    )
}

export default Contact;