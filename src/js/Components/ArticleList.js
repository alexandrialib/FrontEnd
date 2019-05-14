import React,{Component} from 'react';
import '../../css/dashboard.css'
import  Navbar  from './NavBar';
import {URL} from '../DataProvider'
import Card from '../Components/Cards'
import {Link} from 'react-router-dom'
import '../../css/titleBadges.scss'

import '../../css/components/sticky.scss';
const url= URL;
export default class ArticlelList extends Component{
    constructor(){
        super();
        this.state={
          name:"",
          categories:[]
        }
      }

    componentDidMount(){
      const tm=window.location.pathname
      fetch(url+tm).then((Response)=> Response.json())
      .then(category =>{
       this.setState({
         name:category.name,
        categories:category.articles
       })
      })
    }
    
    render(){ 
            const ur='/categories/'+this.state.name+'/articles/'
            const tg=this.state.name
            return (
              <div className="App">
              <Navbar/>
            
            
              <section class="section-container">
              <div className="contai">
              {this.state.categories.map(key=>
              <Card
              title={key.title}
              tags={[tg]}
              refe={ur+key.title}
              content="orem ipsum dolor sit amet, consectetur adipisi dolor sit amet, consectetur adipis dolor sit amet, consectetur adipis"
              img="https://i.imgur.com/SbMGmW4.gif"
            />
                )}
              </div>
                </section>
              </div> 
            )
      
          }
}
