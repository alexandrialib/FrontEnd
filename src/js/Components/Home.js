import React from 'react'
import '../../css/Home.css'
import '../../css/dashboard.css'
import Recipe from './Dashboar'
import { Navbar } from './NavBar';
import '../../css/title.scss'
export default class Home extends React.Component{
  
  render() {
    document.body.id="";
    return (
      
        <div className="home">
           <div className="container">
          <Navbar/>
          </div> 
         <div className="container">
        

         <div id="dust">
</div>
<div class="titleHome">
  <h1>
    <div>
      <span></span> 
      ALEXANDRIA
      <span></span>
    </div>
   
  </h1>

</div>
</div>
            <section class="recipe-container">
            
              <Recipe 
                title="Dijkstra’s algorithm"
                ingredients={["Graph Theory"]}
                instructions="Given a graph and a source vertex in the graph, find shortest paths from source to all vertices in the given graph."
                img="https://kjaer.io/images/algorithms/dijkstra.gif"
              />
              <Recipe 
                title="Hamiltonian Cycle"
                ingredients={["Graph Theory"]}
                instructions="A Hamiltonian cycle is a closed loop on a graph where every node (vertex) is visited exactly once"
                img="https://i.imgur.com/3kbCpcf.gif"
              />
              <Recipe 
                title="Binary Search tree"
                ingredients={["Data Structure"]}
                instructions="Binary search tree is a data structure."
                img="https://devopedia.org/images/article/28/2627.1490521240.gif"
              />
            </section>
        <section class="recipe-container">
        
        <Recipe 
          title="Dijkstra’s algorithm"
          ingredients={["Graph Theory"]}
          instructions="Given a graph and a source vertex in the graph, find shortest paths from source to all vertices in the given graph."
          img="https://kjaer.io/images/algorithms/dijkstra.gif"
        />
        <Recipe 
          title="Hamiltonian Cycle"
          ingredients={["Graph Theory"]}
          instructions="A Hamiltonian cycle is a closed loop on a graph where every node (vertex) is visited exactly once"
          img="https://i.imgur.com/3kbCpcf.gif"
        />
        <Recipe 
          title="Binary Search tree"
          ingredients={["Data Structure"]}
          instructions="Binary search tree is a data structure."
          img="https://devopedia.org/images/article/28/2627.1490521240.gif"
        />
      </section>
        
        </div>
  
    );
  }    

}