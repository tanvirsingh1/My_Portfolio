import React, { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';
import "./Contact.css";
import { useState } from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
            console.log('Email sent successfully!');
            toast.success('Email sent successfully!');
            // Clear the form
            form.current.reset();

            // Show success message
            setSuccessMessage('Your message has been sent successfully!');
            setTimeout(() => {
                setSuccessMessage('');
            }, 2000);

        } catch (error) {
            console.log('Failed to send email.', error);
            alert("error")
            toast.error('Failed to send email.');
        }
    };
    return (
        <div className="contact" id="contact">
            <div className="card card0 border-0">
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 contact-column">
                        <div className="card1">
                            <div className="contact-content">
                                <div className="social-media">
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <BsGithub />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <BsLinkedin />
                                    </a>
                                </div>
                                <form ref={form} onSubmit={handleSubmit} className="contact-form">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        className="form-input"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                        className="form-input"
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        rows="4"
                                        required
                                        className="form-textarea"
                                    />
                                    <button type="submit" className="form-button">Send</button>
                                    {successMessage && (
                                        <div className="success-message">
                                            {successMessage}
                                        </div>
                                    )}
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Contact;
