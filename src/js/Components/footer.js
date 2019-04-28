import React,{Component} from 'react'
class Footer extends Component{
    render(){
        return(
        <footer class="page-footer center-on-small-only">

  <div class="container-fluid">
    <div class="row">

      <div class="col-md-3 offset-lg-1 hidden-lg-down">
        <h5 class="title">ABOUT MATERIAL DESIGN</h5>
        <p>Material Design (codenamed Quantum Paper) is a design language developed by Google. </p>

        <p>Material Design for Bootstrap (MDB) is a powerful Material Design UI KIT for most popular HTML, CSS, and JS framework - Bootstrap.</p>
      </div>
 

      <hr class="hidden-md-up"/>

      <div class="col-lg-2 col-md-4 offset-lg-1">
        <h5 class="title">Our projects</h5>
        <ul>
          <li><a href="#!">Line-two</a></li>
          <li><a href="#!">Dreamlink Inc.</a></li>
          <li><a href="#!">Vasty&Broad</a></li>
          <li><a href="#!">Koromba Ltd.</a></li>
        </ul>
      </div>
    

      <hr class="hidden-md-up"/>

    
      <div class="col-lg-2 col-md-4">
        <h5 class="title">Contact</h5>
        <ul>
          <li><a href="#!">Social Media</a></li>
          <li><a href="#!">Sales</a></li>
          <li><a href="#!">Support</a></li>
          <li><a href="#!">Contact details</a></li>
        </ul>
      </div>
   

      <hr class="hidden-md-up"/>

      <div class="col-lg-2 col-md-4">
        <h5 class="title">Culture</h5>
        <ul>
          <li><a href="#!">Events</a></li>
          <li><a href="#!">People</a></li>
          <li><a href="#!">Jobs</a></li>
          <li><a href="#!">Plans</a></li>
        </ul>
      </div>
 

    </div>
  </div>
 

  <hr/>

  <div class="call-to-action">
    <h4> Created with Material Design for Bootstrap</h4>
    <br/>
    <h5>Get our UI KIT for free</h5>
    <ul>
      <li><a target="_blank" href="http://mdbootstrap.com/getting-started/" class="btn btn-info">Download now!</a></li>
      <li><a target="_blank" href="http://mdbootstrap.com/material-design-for-bootstrap/" class="btn btn-default">Learn more</a></li>
    </ul>
  </div>
 
  <div class="footer-copyright">
    <div class="container-fluid">
      © 2017 Copyright: <a href="http://www.MDBootstrap.com"> MDBootstrap.com </a>

    </div>
  </div>


</footer>
    )}

}
export default Footer;