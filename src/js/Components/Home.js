import React from 'react'
import Card from './Cards'
import Navbar from './NavBar'
import Footer from './footer'

import '../../css/SideList.scss'
export default class Home extends React.Component {

  render() {

    return (

      <div className="App">
        <Navbar />
        <section class="section-container">
          <section className="left-contain">
            <Card
              title="Selection"
              tags={["Sort"]}
              img="https://www.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg"
            />
            <Card
              title="Quick"
              tags={["Sort"]}
              img="https://www.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg"
            />
          </section>
        </section>
      </div>

    );
  }

}
