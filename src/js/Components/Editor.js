import React, { Component } from 'react';
import AceEditor from 'react-ace';
import axios from 'axios';

import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/mode/haskell';
import 'brace/mode/javascript';
import 'brace/mode/c_cpp';
import 'brace/mode/prolog';
import 'brace/theme/monokai';

const url = 'https://alexandria-lib-back.herokuapp.com/sse/editors/'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aceEditorValue:"",
      id:"5c992f0922a4ae1086a46fd5"
    }
    
    this.eventSource = new EventSource(url);
    this.onChange = this.onChange.bind(this)
    this.update  = this.update.bind(this)
  }
  
  componentDidMount() {
    this.eventSource.onmessage = e => this.update(JSON.parse(e.data))
    console.log("componentDid Mount",this.eventSource.onmessage)
    // const posts = await getEditorById(this.state.id)
    
  }

  update(param){
    console.log(param)
    if(param.id===this.state.id){
    var x = param.text//.map(x => x+"\n")
    this.setState({
      aceEditorValue: (x.join("\n"))
    });
    // this.setState({
    //   aceEditorValue: param.text[0]
    // })
  }
  }
  
  onChange (newValue) {
    axios.put(url,{"id": this.state.id,"text": newValue.split('\n')});
    this.setState({
      aceEditorValue: newValue
    });
    
  }
  
  
  render() {
    return (
      <div className="App">
      <AceEditor 
      editorProps={{ $blockScrolling: true }}
      mode="python"
      onChange={this.onChange}
      theme="monokai"
      value={this.state.aceEditorValue}
      />
      <div>
      </div>
      </div>
      );
    }
  }
  
  export default Editor;
  