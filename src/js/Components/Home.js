import React from 'react'
import Card from './Cards'
import Navbar from './NavBar'
import '../../css/dashboard.css'
import '../../css/SideList.scss'  
import '../../css/home.css'
import Tags from './PrincipalPage/tags'
import PopulaPost from '../Components/PrincipalPage/PopularPost'
import {getAllCategories,getCategoryByName} from '../DataProvider'

export default class Home extends React.Component {

  constructor(){
    super();
    this.state={
      articles:{
        user:{},
        cate:[]
      },
      popular:[],
      tagsList:[],
      popularArticles:[]
    }
  }
  async componentDidMount(){
    const post= await getAllCategories("categories")
  
        this.setState({tagsList:post})
    const postPopular= await getCategoryByName("Sort");
    const tmp= await getCategoryByName("Graph theory");
    const artCat=postPopular.articles;
    var res = artCat.concat(tmp.articles)
    this.setState({popular:res,popularArticles:tmp.articles})
  }

  render() {

    return (

      <div className="App">
        <Navbar />
        <div className="container-fluid">
  <header>
    <h1 className="page-title"></h1>
    <p className="about">
      
    </p>
  </header>
  <section>
    <div className="content">
            <Card
              title="Quick"
              tags={["Sort"]}
              refe="/categories/Sort/articles/Quick"
              content="orem ipsum dolor sit amet, consectetur adipisi dolor sit amet, consectetur adipis dolor sit amet, consectetur adipis"
              img="https://i.imgur.com/SbMGmW4.gif"
            />
            <Card
              title="MST"
              tags={["Graph theory"]}
              content="orem ipsum dolor sit amet, consectetur adipisi"
              refe="/categories/Graph%20theory/articles/MST"
              img="https://d2r55xnwy6nx47.cloudfront.net/uploads/2015/11/MorphingShapes_615x400.gif"
            />
            <Card
              title="Merge"
              content="orem ipsum dolor sit amet, consectetur adipisi"
              tags={["Sort"]}
              img="https://thumbs.gfycat.com/PracticalEnlightenedGrosbeak-small.gif"
            />
            <Card
              title="TopoSort"
              tags={["Graph Theory"]}
              content="orem ipsum dolor sit amet, consectetur adipisi"
              refe="/categories/Graph%20theory/articles/TopoSort"
              img="https://thumbs.gfycat.com/PracticalEnlightenedGrosbeak-small.gif"
            />
            {this.state.popular.map((keys,i) =>
              <Card key={i}
              title={keys.title}
              tags={["Sort"]}
              content="orem ipsum dolor sit amet, consectetur adipisi"
              refe={"/categories/Sort/articles/"+keys.name}
              img="https://thumbs.gfycat.com/PracticalEnlightenedGrosbeak-small.gif"
              />
              )}        
    </div>
    <aside>
     <div className="profilee widget">
       <img src="https://thumbs.gfycat.com/PracticalEnlightenedGrosbeak-small.gif" alt="My Name" className="user-image"/>
       <div className="user-info">
       <h3 className="user-name">TopoSort</h3>
       <p className="user-about">Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
     </div>
       </div>
      <div className="popular-post widget">
        <div className="header">Popular Articles</div>
        <ul className="list-popular-post">
        {this.state.popularArticles.map((keys,i) =>
        <PopulaPost key={i}
        title={keys.title}/>
        )}
        </ul>
      </div>      
          <div className="tags  header">          
              <div className="tags-body">
                {this.state.tagsList.map((keys,i)=>
                <Tags key={i}
                title={keys.name}
                refe={"/categories/"+keys.name}/>)}
              </div>
            </div>
           </aside>
        </section>
      </div>
      </div>

    );
  }

}