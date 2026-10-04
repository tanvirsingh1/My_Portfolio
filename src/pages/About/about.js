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
                        <p>Hello! I’m Tanvir Singh, a Data Analyst in Toronto working on analytics and AI automation. I hold an Honours Bachelor of Technology in Software Development from Seneca Polytechnic, where I graduated with a 4.0 GPA and made the President’s List six terms in a row.</p>

                        <p>At Hotspex Media, I build ETL pipelines with Adverity and dbt, set up conversion tracking across GA4, Google Ads and Meta, and use Claude Code and n8n to automate work that used to be manual, like GTM tag builds and CRM lead syncs.</p>

                        <p>Before that, I spent over three years as a Data Analyst at CBV Collection Services building Power BI dashboards and automating SAS and SQL reporting, and two co-op terms at CGI validating ETL pipelines and building test automation for financial systems.</p>

                        <p>On the side, I build AI projects: agentic workflows, RAG chatbots and ML models. When I’m not working, I enjoy spending time with family and friends and learning about the stock market.</p>

                    </div>
                </div>
            </div>
        </>)
}

export default About