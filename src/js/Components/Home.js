import React from 'react'
import Card from './Cards'
import Navbar from './NavBar'
import Footer from './footer'
import '../../css/dashboard.css'
import '../../css/SideList.scss'
import '../../css/home.css'
export default class Home extends React.Component {

  render() {

    return (

      <div className="App">
        <Navbar />
        <div class="container-fluid">
  <header>
    <h1 class="page-title"></h1>
    <p class="about">
      
    </p>
  </header>
  <section>
    <div class="content">
       <div class="item post">
        <img src="https://cdn-images-1.medium.com/max/1200/1*9QRFQdpO2f59GsN2KsE9XA.png" alt="TITLE HEADING" class="wall-image"/>
        <div class="post-detail">
        <h2 class="title-article">Sort</h2>
        <div class="title-description"><span class="text-des">Title description,</span><span class="time">April 7, 2014</span></div>
         <div class="post-content">Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</div>
         <div class="bottom">
           <a href="#"><button class="read-more">Read more</button></a>
           <lable class="label-comment">
             Comment <span class="num-of-comment">0</span>
           </lable>
         </div>
      </div>
     </div>
        <div class="item post">
        <img src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2015/11/MorphingShapes_615x400.gif" alt="TITLE HEADING" class="wall-image"/>
        <div class="post-detail">
        <h2 class="title-article">Sort</h2>
        <div class="title-description"><span class="text-des">Title description,</span><span class="time">April 7, 2014</span></div>
         <div class="post-content">Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</div>
         <div class="bottom">
           <a href="#"><button class="read-more">Read more</button></a>
           <lable class="label-comment">
             Comment <span class="num-of-comment">0</span>
           </lable>
         </div>
      </div>
     </div>
        <div class="item post">
        <img src="https://i.imgur.com/SbMGmW4.gif" alt="TITLE HEADING" class="wall-image"/>
        <div class="post-detail">
        <h2 class="title-article">Sort</h2>
        <div class="title-description"><span class="text-des">Title description,</span><span class="time">April 7, 2014</span></div>
         <div class="post-content">Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</div>
         <div class="bottom">
           <a href="#"><button class="read-more">Read more</button></a>
           <lable class="label-comment">
             Comment <span class="num-of-comment">0</span>
           </lable>
         </div>
      </div>
     </div>
        <div class="item post">
        <img src="https://thumbs.gfycat.com/PracticalEnlightenedGrosbeak-small.gif" alt="TITLE HEADING" class="wall-image"/>
        <div class="post-detail">
        <h2 class="title-article">TOPOSORT</h2>
        <div class="title-description"><span class="text-des">Title description,</span><span class="time">April 7, 2014</span></div>
         <div class="post-content">Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</div>
         <div class="bottom">
           <a href="#"><button class="read-more">Read more</button></a>
           <lable class="label-comment">
             Comment <span class="num-of-comment">0</span>
           </lable>
         </div>
      </div>
     </div>
    </div>
    <aside>
     <div class="profile widget">
       <img src="https://thumbs.gfycat.com/PracticalEnlightenedGrosbeak-small.gif" alt="My Name" class="user-image"/>
       <div class="user-info">
       <h3 class="user-name">TopoSort</h3>
       <p class="user-about">Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
     </div>
       </div>
      <div class="popular-post widget">
        <div class="header">Popular Articles</div>
        <ul class="list-popular-post">
          
           <li class="post-item">
            <img src="https://www.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg" alt="Lorem" class="post-image"/>
            <div class="post-item-info">
              <h5 class="post-item-title">Sort</h5>
              <p class="post-item-description">Sed mattis nunc</p>
            </div>
          </li>
           <li class="post-item">
            <img src="https://www.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg" alt="Lorem" class="post-image"/>
            <div class="post-item-info">
              <h5 class="post-item-title">Sort</h5>
              <p class="post-item-description">Sed mattis nunc</p>
            </div>
          </li>
           <li class="post-item">
            <img src="https://www.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg" alt="Lorem" class="post-image"/>
            <div class="post-item-info">
              <h5 class="post-item-title">Sort</h5>
              <p class="post-item-description">Sed mattis nunc</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="tags  header">
        
        <div class="tags-body">
          <span class="tag tag-orange">Travel</span> <span class="tag tag-red">New York</span>
          <span class="tag tag-red">London</span>
          <span class="tag tag-blue">IKEA</span>
        </div>
      </div>
    </aside>
  </section>
</div>
          
          
         
       
      </div>

    );
  }

}
