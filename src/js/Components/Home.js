import React from 'react'
import Card from './Cards'
import { Navbar } from './NavBar'
import '../../css/nav.css'
import '../../css/SideList.scss'
export default class Home extends React.Component{
  
  render() {
 
    return (
      
      <div className="App">
      <Navbar/>
<section class="section-container">
  <section className="left-contain">
    <Card
      title="yowis"
      tags={["Sort"]}
      img="https://www.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg"
    />
    <Card
      title="yowis"
      tags={["Sort"]}
      img="https://www.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg"
    />
  </section>

  <section class="container">
<div class="heading">

<h1 class="heading__title">Most Popular</h1>
</div>
<div class="form">

  <div className=".form__label list">
<ul class="toDoList">
  <li>Sort</li>
  <li>Graph-theory</li>
  <li>Data Structure</li>
</ul>
</div>


  <button class="button"><span>See All</span></button>

</div>

</section>
  </section>




    
    </div>
  
    );
  }    

}
/*
import Card from './Cards'
import { Navbar } from './NavBar'
import '../../css/nav.css'
import '../../css/SideList.scss'
 <div className="App">
          <Navbar/>
 <section class="section-container">
      <section className="left-contain">
        <Card
          title="yowis"
          tags={["Sort"]}
          img="https://www.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg"
        />
        <Card
          title="yowis"
          tags={["Sort"]}
          img="https://www.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg"
        />
      </section>
   
      <section class="container">
  <div class="heading">
   
    <h1 class="heading__title">Most Popular</h1>
  </div>
  <div class="form">
    
      <div className=".form__label list">
    <ul class="toDoList">
      <li>Sort</li>
      <li>Graph-theory</li>
      <li>Data Structure</li>
    </ul>
    </div>
  
   
      <button class="button"><span>See All</span></button>
   
  </div>

</section>
      </section>
 



        
        </div> */