import React from 'react'
import '../../css/Projects.css'
import {Project, ProjectNew} from './Project'



// var projects = [
//   {
//     title:"Ejemplo 1",
//     image:"https://media.wired.com/photos/5b7f64cbbe2f8d3a624b77b2/4:3/w_2000,c_limit/SPoW_82318_01.jpg",
//     percentage:4,
//   },
//   {
//     title:"Ejemplo 2",
//     image:"https://images.pexels.com/photos/279/black-and-white-branches-tree-high.jpg?cs=srgb&dl=bark-black-and-white-branches-279.jpg&fm=jpg",
//     percentage:60,
//   },
//   {
//     title:"Ejemplo 3",
//     image:"http://en.es-static.us/upl/2018/09/comet-21P-Giacobini-Zinner-9-10-2018-Greg-Hogan-Kathleen-GA-e1536667180380.jpg",
//     percentage:30,
//   },
//   {
//     title:"Ejemplo 4",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSor2psScYckea5cHEuLLPT6m8SbJ0kA1MZYw-7EV-2grFMcjUtWQ",
//     percentage:50,
//   },
//   {
//     title:"Ejemplo 5",
//     image:"http://cdn.eso.org/images/screen/eso1329d.jpg",
//     percentage:20,
//   } 
// ]

export const ProjectList = () =>(
  <div>
    <hr/> 
    <div className="projects-container">
      {/* {this.props.project.map(x=> <Project project={x}/>)} */}
      <ProjectNew/>
    </div>
  </div>
);