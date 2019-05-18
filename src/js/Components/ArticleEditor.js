import React, { Component } from 'react'
import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import AceEditor from 'react-ace';
import '../../css/UserPage/profile.scss';
import Navbar from './NavBar'
import '../../css/UserPage/mark.css'
import "brace/mode/markdown";
import "brace/theme/monokai";

export class ArticleEditor extends Component {
  constructor(props){
    super(props);
    this.state = {
      text : ` # Hello!`
    }
    this.onChange = this.onChange.bind(this)
  }
  static propTypes = {
    prop: PropTypes
  }

  onChange(newValue,x) {
    this.setState({
      text: newValue
    });
  }

  render() {
    return (
      <div className="teacherEditor" >
      <Navbar />
    
      <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <AceEditor 
        style={{width:"100%"}}
          mode="markdown" 
          theme="monokai"
          value={this.state.text} 
          onChange={this.onChange}/>

      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 showInput">
        <Markdown 
        source= {this.state.text} 
        />
        </div>
       
      </div>
      </div>
    )
  }
}
