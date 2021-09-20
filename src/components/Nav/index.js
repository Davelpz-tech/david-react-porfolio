import React from "react";

function Nav() {
    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img">👨‍💻</span> David Lopez
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">About me</a>
                    </li>
                    <li className="mx-2">
                        <span><a href="#portfolio">Portfolio</a></span>
                    </li>
                    <li className="mx-2">
                        <span><a href="#contact">Contact</a></span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;