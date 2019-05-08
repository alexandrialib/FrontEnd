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
        user:{}
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
        <div class="container-fluid">
  <header>
    <h1 class="page-title"></h1>
    <p class="about">
      
    </p>
  </header>
  <section>
    <div class="content">
            <Card
              title="Quick"
              tags={["Sort"]}
              img="https://i.imgur.com/SbMGmW4.gif"
            />
            <Card
              title="MST"
              tags={[""]}
              img="https://d2r55xnwy6nx47.cloudfront.net/uploads/2015/11/MorphingShapes_615x400.gif"
            />
            <Card
              title="Merge"
              tags={["Sort"]}
              img="https://thumbs.gfycat.com/PracticalEnlightenedGrosbeak-small.gif"
            />
            <Card
              title="TopoSort"
              tags={["Graph Theory"]}
              img="https://thumbs.gfycat.com/PracticalEnlightenedGrosbeak-small.gif"
            />
            {this.state.popular.map(key =>
              <Card
              title={key.title}
              tags={["Sort"]}
              
              img="https://thumbs.gfycat.com/PracticalEnlightenedGrosbeak-small.gif"
              />
              )}        
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
        {this.state.popularArticles.map(key =>
        <PopulaPost 
        title={key.title}/>
        )}
        </ul>
      </div>      
          <div class="tags  header">          
              <div class="tags-body">
                {this.state.tagsList.map(key=>
                <Tags 
                title={key.name}/>)}
              </div>
            </div>
           </aside>
        </section>
      </div>
      </div>

    );
  }

}