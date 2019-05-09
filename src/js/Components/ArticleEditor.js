import React, { Component } from 'react'
import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import AceEditor from 'react-ace';
import CodeBlock from 'react-markdown'

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
    console.log(newValue);
    this.setState({
      text: newValue
    });
  }

  render() {
    return (
      <div>
        <AceEditor 
        mode="markdown" 
        theme="monokai"
        value={this.state.text} 
        onChange={this.onChange}/>
        <Markdown 
        source= {this.state.text} 
        />
      </div>
    )
  }
}
