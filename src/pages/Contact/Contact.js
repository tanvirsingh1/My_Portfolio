import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
const Contact = () => {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    //handle submit button
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!name || !email || !msg) {
                toast.error("PLease Provide all fields");
            }
            const res = await axios.post("/api/v1/portfolio/sendEmail", {
                name,
                email,
                msg,
            });
            //validation success
            if (res.data.success) {
                toast.success(res.data.message);
                setname("");
                setEmail("");
                setMsg("");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className=" contact" id="contact">
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">

                                    <img
                                        src="data:image/jpeg;base64,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"
                                        alt="ocontact"
                                        className="image"
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">

                            <div className="card2 d-flex card border-0 px-4 py-5">
                                <div className="row">
                                    <div className="row">
                                        <h6>
                                            Contact With
                                            <BsLinkedin color="blue" size={30} className="ms-2" />
                                            <BsGithub color="black" size={30} className="ms-2" />
                                            <BsFacebook color="blue" size={30} className="ms-2" />
                                        </h6>
                                    </div>

                                    <div className="row px-3 mb-4">
                                        <div className="line" />
                                        <small className="or text-center">OR</small>
                                        <div className="line" />
                                    </div>
                                    <div className="row px-3">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your Name"
                                            className="mb-3"
                                            value={name}
                                            onChange={(e) => setname(e.target.value)}
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter Your Email Address"
                                            className="mb-3"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <textarea
                                            type="text"
                                            name="msg"
                                            placeholder="Write your message"
                                            className="mb-3"
                                            value={msg}
                                            onChange={(e) => setMsg(e.target.value)}
                                        />
                                    </div>
                                    <div className="row px-3">
                                        <button className="button" onClick={handleSubmit}>
                                            SEND MESSAGE
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;