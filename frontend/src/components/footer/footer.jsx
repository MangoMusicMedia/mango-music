import React from "react";
import { Link } from "react-router-dom";
import github from "../../images/github-icon.png"


class Footer extends React.Component {

    render() {

        return(

            <div className="footer-wrapper">

                <footer id="footer">

                        <div className="footer-container">
                            <div className="about-us-container">
                                <h2>About Us</h2>
                                <Link to="/ourTeam" className="our-team">Our team</Link> 
                            </div>

                            <div className="help-container">
                                <h2 id="help">Help</h2>
                                <p className="support-page">Support page</p>
                            </div>

                            <div className="technologies-container">
                                <h2>Technologies</h2>
                                <a href="https://www.mongodb.com/" target="_blank">MongoDB / Mongoose</a>
                                <a href="https://expressjs.com/" target="_blank">Express</a>
                                <a href="https://react-redux.js.org/" target="_blank">React / Redux</a>
                                <a href="https://nodejs.org/" target="_blank">Node.js</a>
                                <a href="https://developer.spotify.com/documentation/web-api/" target="_blank">Spotify API</a>
                            </div>

                            <div className="contact-us-container">
                                <h2 id="contact-us">Contact Us</h2>
                                <a href="https://github.com/Shhmabbey" target="_blank">Abigail Hernandez</a>
                                <a href="https://github.com/kingbloopy/Plantsy" target="_blank">Maggie McDonald</a>
                                <a href="https://github.com/Catherine-M-Choi" target="_blank">Catherine Choi</a>
                                <a href="https://github.com/johnnyhoang510" target="_blank">Johnny Hoang</a>
                            </div>  
                        </div>

                        <div className="bottom-footer-container">
                            <p>Copyright &#169; 2022 MangoMusic</p>
                            <a href="https://github.com/MangoMusicMedia/mango-music" target="_blank"><img className="github-icon" src={github} alt="github-icon" /></a>
                        </div>
                </footer>

            </div>

        )
    }
};


export default Footer;