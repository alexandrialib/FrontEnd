import React,{Component} from 'react';
import Navabar from './NavBar'
import '../../css/About.css'
class About extends Component{
    render(){
        return(
            <div className="App">
            <Navabar/>
            <section class="section-container">
            <section id="team" class="team-area">
        
            <div class="row">
                <div class="col-md-12">
                    <div class="site-heading text-center">
                        <h2>Our <span>Team</span></h2>
                        <h4>Meet our awesome and expert team members</h4>
                    </div>
                </div>
            </div>
                <div class="row team-items">
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                                <img class="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
                                <div class="overlay">
                                    <h4>Lorem Ipsum</h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <div class="social">
                                        <ul>
                                            
                                            <li class="instagram">
                                                <a href="/github.com/blackpahntom96"><i class="fab fa-github"></i></a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <span class="message">
                                    <a href="#"><i class="fas fa-envelope-open"></i></a>
                                </span>
                                <h4>Alejandro Guzman</h4>
                                <span>Backend Developer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                                <img class="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
                                <div class="overlay">
                                    <h4>Lorem Ipsum</h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <div class="social">
                                        <ul>
                                           
                                            <li class="instagram">
                                                <a href="/github.com/AlejoGuzm07"><i class="fab fa-github"></i></a>
                                            </li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <span class="message">
                                    <a href="#"><i class="fas fa-envelope-open"></i></a>
                                </span>
                                <h4>Juan Moreno</h4>
                                <span>Backend Developer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                                <img class="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
                                <div class="overlay">
                                    <h4>Lorem Ipsum</h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <div class="social">
                                        <ul>
                                           
                                            <li class="instagram">
                                                <a href="github.com/YohannaToro"><i class="fab fa-github"></i></a>
                                            </li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <span class="message">
                                    <a href="#"><i class="fas fa-envelope-open"></i></a>
                                </span>
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