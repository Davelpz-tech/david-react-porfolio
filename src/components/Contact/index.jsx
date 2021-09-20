import React, { useState } from "react";

function ContactForm() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(true)
    };

    return (
        <section className="form-container mx-3 my-5">
            <div id="contact" className="header-container">
                <h1>CONTACT ME</h1>
                <div className="line-contact"></div>
            </div>
            <form id="contact-form" className="contact-form my-2" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" placeholder="type your message here..." className="textbox" rows="5" />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
                {message && <span>Your message has been sent</span>}
            </form>
        </section>
    )
}

export default ContactForm