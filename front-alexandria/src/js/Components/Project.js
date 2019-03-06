import React from 'react'
import {ProgressBar} from 'primereact/progressbar';
import {Button} from 'primereact/button';

import '../../css/Projects.css'


export const Project =(props) => (
  <div className="project">
    <div className="project-title" >
      <div className="project-title-img" style={{ backgroundImage:"url("+props.project.image+")" }}></div>
      <div className="project-title-title"><h1>{props.project.title}</h1></div>
    </div>
    <div className="project-bar">
      <ProgressBar value={props.project.percentage} style={{borderRadius:100}}/>
    </div>
    <div className="project-task">
      <h4>Tasks:</h4>
      <ol>
        {props.project.tasks.map( (x,i) => <li key={i}>{x.name} {x.percentage}</li>)}
      </ol>
    </div>
    <div className="project-other">
      <Button label="Go" className="p-button-rounded" style={{width:"100%"}}/>
    </div>
  </div>
);

export const ProjectNew = () => (
  <div className="project-new">
    <Button type="button" icon="pi pi-plus" />
  </div>
);