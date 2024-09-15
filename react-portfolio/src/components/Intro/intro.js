import React from 'react';
import './intro.css';
import bg from '../../assets/bg.png';
import btnImg from '../../assets/hireme.png';
import{Link} from 'react-scroll';
const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Jiro</span><br />Website Designer  </span>
                <p className="introPara">I am a web designer skilled in creating websites that combine visual appeal with <br></br>intuitive user experience, ensuring each site is both striking and easy to navigate.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;