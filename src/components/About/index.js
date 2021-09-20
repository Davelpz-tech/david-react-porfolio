import React from "react";
import profile from "../../assets/big/profile.jpg"

function About() {
    return (
        <div id="about">
            <h2 className="title mx-4"></h2>
            <div className="container">
                <span className="profile-container mx-3 my-5">
                    <img src={profile} className="img-profile"/>
                    <p className="subtitle my-2">David hard at work, totally a picture of me and not something I got off of unsplash</p>
                </span>
                <p className="para mx-3 my-5">Im an aspiring web developer. I've been in the world of Web Design for more than 3 years. I formerly worked for a webhosting company where I built websites with Word Press. These experiences opened my eyes to a passion for building web content. As a result I joined a Coding Bootcamp and decided to learn the ins and outs of actual Web Development. Eversince, I've been on a road of progress to become a Full Stack Web Developer. I currently have all the knowledge to create full stack web applications from scratch.</p>
            </div>
        </div>
    );
};

export default About;