import React from 'react'
import '../../css/Projects.css'
import {Project, ProjectNew} from './Project'


var projects = [
  {
    title:"xxx",
    image:"https://media.wired.com/photos/5b7f64cbbe2f8d3a624b77b2/4:3/w_2000,c_limit/SPoW_82318_01.jpg",
    percentage:4,
    tasks:[
      {
        name:"hello",
        percentage:10
      },
      {
        name:"hello",
        percentage:20
      },
    ],
  },
  {
    title:"xxx",
    image:"https://images.pexels.com/photos/279/black-and-white-branches-tree-high.jpg?cs=srgb&dl=bark-black-and-white-branches-279.jpg&fm=jpg",
    percentage:60,
    tasks:[
      {
        name:"hello",
        percentage:0
      },
      
    ],
  },
  {
    title:"xxx",
    image:"http://en.es-static.us/upl/2018/09/comet-21P-Giacobini-Zinner-9-10-2018-Greg-Hogan-Kathleen-GA-e1536667180380.jpg",
    percentage:30,
    tasks:[
      {
        name:"hello",
        percentage:0
      },
      
    ],
  },
  {
    title:"xxx",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSor2psScYckea5cHEuLLPT6m8SbJ0kA1MZYw-7EV-2grFMcjUtWQ",
    percentage:50,
    tasks:[
      {
        name:"hello",
        percentage:0
      },
      
    ],
  },
  {
    title:"xxx",
    image:"http://cdn.eso.org/images/screen/eso1329d.jpg",
    percentage:20,
    tasks:[
      {
        name:"hello",
        percentage:0
      },
      
    ],
  } 
]

export const ProjectList = () =>(
  <div>
    <h2 style={{textAlign:"center",marginTop:100}}>My projects</h2>
    <hr/> 
    <div className="projects-container">
      <Project project={projects[0]}/>
      <Project project={projects[1]}/>
      <Project project={projects[2]}/>
      <Project project={projects[3]}/>
      <Project project={projects[4]}/>
      <ProjectNew/>
    </div>
  </div>
);