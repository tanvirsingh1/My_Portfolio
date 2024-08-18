import React from 'react'
import './About.css'
const About = () => {
    return (
        <>
            <div className='about' id='about'>
                <div className='row'>


                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">

                        <img
                            src={require('../../assets/Images/profile-pic.JPG')}
                            width="150" height="220px"
                            alt="profile pic"
                        />
                    </div>
                    <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>

                        <h2>About me</h2>
                        <p>Hello! I’m Tanvir Singh, a passionate 4th-year Computer Science student at Seneca College. My journey in technology and data engineering began with a deep curiosity and has since blossomed into a profound dedication to leveraging the power of tech for innovative solutions.

                            Throughout my academic career, I’ve embraced opportunities to blend web technologies with the MERN stack, automate processes using cloud solutions, and dive deep into data analysis. Each project I undertake reflects my enthusiasm for solving complex problems and pushing the boundaries of what's possible.

                            When I'm not immersed in code or exploring the latest tech trends, I cherish spending quality time with my family and friends. I also have a keen interest in the stock market and actively seek to educate myself to achieve financial stability.

                            My goal is to continuously evolve in the tech world and contribute to meaningful advancements while maintaining a balanced and fulfilling life.</p>
                    </div>
                </div>
            </div>
        </>)
}

export default About