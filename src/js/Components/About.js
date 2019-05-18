import React,{Component} from 'react';
import Navabar from './NavBar'
import '../../css/About.css'
class About extends Component{
    render(){
        return(
            <div className="App">
            <Navabar/>
            <section className="section-container">
            <section id="team" className="team-area">
        
            <div className="row">
                <div className="col-md-12">
                    <div className="site-heading text-center">
                        <h2>Our <span>Team</span></h2>
                        <h4>Meet our awesome and expert team members</h4>
                    </div>
                </div>
            </div>
                <div className="row team-items">
                    <div className="col-md-4 single-item">
                        <div className="item">
                            <div className="thumb">
                                <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
                                <div className="overlay">
                                    <h4>Lorem Ipsum</h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <div className="social">
                                        <ul>
                                            
                                            <li className="instagram">
                                                <a href="http://github.com/blackphantom96"><i className="fab fa-github"></i></a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="info">                       
                                <h4>Juan Moreno</h4>
                                <span>Backend Developer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 single-item">
                        <div className="item">
                            <div className="thumb">
                                <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
                                <div className="overlay">
                                    <h4>Lorem Ipsum</h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <div className="social">
                                        <ul>
                                           
                                            <li className="instagram">
                                                <a href="http://github.com/AlejoGuzm07"><i className="fab fa-github"></i></a>
                                            </li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <h4>Alejandro Guzman</h4>
                                <span>Backend Developer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 single-item">
                        <div className="item">
                            <div className="thumb">
                                <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
                                <div className="overlay">
                                    <h4>Lorem Ipsum</h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <div className="social">
                                        <ul>
                                           
                                            <li className="instagram">
                                                <a href="http://github.com/YohannaToro"><i className="fab fa-github"></i></a>
                                            </li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <h4>Yohanna Toro</h4>
                                <span>Frontend Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
        
    </section>
    </section>
    </div>
        )
    }
}
export default About;