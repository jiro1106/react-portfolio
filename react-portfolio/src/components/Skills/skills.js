import React from 'react';
import './skills.css';
import WebDesign from '../../assets/webdesign.png';
import DataScience from '../../assets/datascience.png';
import FullStack from '../../assets/fullstack.png';

const Skills = () => {
    return(
        <section id = 'skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I specialize in designing websites, data science, and full stack development, offering comprehensive solutions that integrate creative design with robust backend functionality and data-driven insights.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Interactive Web Design</h2>
                        <p>Interactive web design creates dynamic websites that respond to user actions, using animations, hover effects, and intuitive navigation to enhance engagement and improve user experience.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={DataScience} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Data Science</h2>
                        <p>Data science uses statistical analysis and machine learning to uncover insights from data, helping organizations make informed decisions and predict future trends.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={FullStack} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Full Stack Development</h2>
                        <p>Full stack development involves building both front-end and back-end, ensuring smooth interaction between user interfaces and server-side logic for complete web solutions.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;