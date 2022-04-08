import React from "react";
import abbeyPhoto from "../../images/abbeyPhoto.jpg";
import maggiePhoto from "../../images/maggiePhoto.jpg";
import catPhoto from "../../images/catPhoto.jpg";
import johnnyPhoto from "../../images/johnnyphoto.jpg";
import github from "../../images/github-icon.png";
import linkedin from "../../images/linkedin.png";
import angel2 from "../../images/angel2.png";


class OurTeam extends React.Component {
    render() {
        return(
            <div id="our-team">
                <div className="our-team-container">
                    <h1 className="our-team-title">Get to Know the Developers:</h1>
                        <div className="our-team-boxes">
                            <div id="box">
                                <img src={abbeyPhoto} alt="" className="individual-photo"/>
                                <div className="icons-wrapper">
                                    <a href="https://github.com/Shhmabbey" target="_blank"><img src={github} id="github-photo-icon" alt="github" /></a>
                                    <a href="" target="_blank"><img src={linkedin} id="linkedin-photo-icon" alt="linkedin" /></a>
                                    <a href="" target="_blank"><img src={angel2} id="angellist-photo-icon" alt="angellist" /></a>
                                </div>
                                <p id="role">Group Lead / Head Honcho</p>
                            </div>
                            <div id="box">
                                <img src={maggiePhoto} alt="" className="individual-photo"/>
                                <div className="icons-wrapper">
                                    <a href="https://github.com/kingbloopy" target="_blank"><img src={github} id="github-photo-icon" alt="github" /></a>
                                    <a href="" target="_blank"><img src={linkedin} id="linkedin-photo-icon" alt="linkedin" /></a>
                                    <a href="" target="_blank"><img src={angel2} id="angellist-photo-icon" alt="angellist" /></a>
                                </div>
                                <p id="role">Frontend Lead / CSS Messiah</p>
                            </div>
                            <div id="box">
                                <img src={catPhoto} alt="" className="individual-photo"/>
                                <div className="icons-wrapper">
                                    <a href="https://github.com/Catherine-M-Choi" target="_blank"><img src={github} id="github-photo-icon" alt="github" /></a>
                                    <a href="" target="_blank"><img src={linkedin} id="linkedin-photo-icon" alt="linkedin" /></a>
                                    <a href="" target="_blank"><img src={angel2} id="angellist-photo-icon" alt="angellist" /></a>
                                </div>
                                <p id="role">Flex / Spotify API Expert</p>
                            </div>
                            <div id="box">
                                <img src={johnnyPhoto} alt="photo" className="individual-photo"/>
                                <div className="icons-wrapper">
                                    <a href="https://github.com/johnnyhoang510" target="_blank"><img src={github} id="github-photo-icon" alt="github" /></a>
                                    <a href="" target="_blank"><img src={linkedin} id="linkedin-photo-icon" alt="linkedin" /></a>
                                    <a href="https://angel.co/u/johnny-hoang-3" target="_blank"><img src={angel2} id="angellist-photo-icon" alt="angellist" /></a>
                                </div>
                                <p id="role">Backend Guy / Route Master</p>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
};


export default OurTeam;