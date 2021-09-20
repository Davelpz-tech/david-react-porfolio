import React from "react";

function Footer() {
    return (
        <div>
            <footer className="footer-container">
                <h2>DAVID LOPEZ</h2>
                <div className="line-footer"></div>
                <ul>
                    <li><a className="footer-links" href="#about">ABOUT ME</a></li>
                    <li><a className="footer-links" href="#portfolio">PORTFOLIO</a></li>
                    <li><a className="footer-links" href="#contact">CONTACT</a></li>
                </ul>
                <div>
                    <p className="footer-para">David Lopez 2021 © </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;