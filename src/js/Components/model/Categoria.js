import React from 'react';
import axios from "axios";
export default class Categoria extends React.Component{
    state={
        activeCategory:[]
    }
    componentDidMount= async ()=>{
        const title=this.props.location.state.category;
        const api_callCategory= await axios.get("http://alexandria-lib-back.herokuapp.com/categories/"+title)
        const activeCategory = api_callCategory;
       
          this.setState({ activeCategory });
          console.log(activeCategory.articles);
    
    }
  
    render(){
       console.log(this.props);
       return(
           
           <div className="container">
             holA
           </div>
       )
   } 
}