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
                        <p>Hello! I’m Tanvir Singh, a Computer Science graduate from Seneca College with a passion for software development, AI, and machine learning.

                            Throughout my journey in technology, I’ve transformed my curiosity into a commitment to building innovative, data-driven solutions. I’ve worked with the MERN stack to create full-stack applications, explored cloud technologies for scalable automation, and applied data analysis techniques to solve complex challenges.

                            When I’m not immersed in code, I enjoy spending time with family and friends and learning about the stock market to build financial knowledge.

                            My goal is to continue growing in the tech world, push the boundaries of what’s possible, and contribute to meaningful advancements.</p>

                    </div>
                </div>
            </div>
        </>)
}

export default About