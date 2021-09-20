import React from "react";
// import Projects from "./Projects"
import { Card } from "@material-ui/core"
import musePal from "../../assets/projectImages/musepal-desk-d.png"
import jsQuiz from "../../assets/projectImages/javascript-quiz-answer-correct.png"
import skyFriend from "../../assets/projectImages/skyfriend-searches.png"
import foodguru from "../../assets/projectImages/food-guru-homepage.png"

function PortfolioList() {
    return (
        <div id="portfolio" className="myworks">
            <div className="spacer"></div>
            <h2 className="title-project">My Works</h2>

            <div className="project-container">
                <Card className="item card"><a href="https://github.com/mavila6/muse-pal" target="_blank" rel="noreferrer"><img src={musePal}/></a></Card>
                <Card className="item card"><a href="https://github.com/Davelpz-tech/JavaScript-Code-Quiz" target="_blank" rel="noreferrer"><img src={jsQuiz}/></a></Card>
                <Card className="item card"><a href="https://github.com/Davelpz-tech/sky-friend" target="_blank" rel="noreferrer"><img src={skyFriend}/></a></Card>
                <Card className="item card"><a href="https://github.com/jlentz17/food-guru" target="_blank" rel="noreferrer"><img src={foodguru}/></a></Card>
            </div>
            <div className="spacer"></div>
        </div>
    )
}

export default PortfolioList;