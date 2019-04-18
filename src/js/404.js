import React from 'react';
import '../css/Error.css';

export default class Error404 extends React.Component {
  render() {
    return (
      <section class="page_404">
  
        <div class="row">	
        <div class="col-sm-12 ">
        <div class="col-sm-10 col-sm-offset-1  text-center">
        <div class="four_zero_four_bg">
          <h3 class="text-center ">404</h3>
        
        
        </div>
        
        <div class="contant_box_404">
        <h3 class="h2">
        Look like you're lost
        </h3>
        
        <h2>the page you are looking for not avaible!</h2>
        
        <a href="" class="link_404">Go to Home</a>
      </div>
        </div>
        </div>
        </div>
      
    </section>
    )
  }
}