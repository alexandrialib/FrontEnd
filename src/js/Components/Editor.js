import React, { Component } from "react";
import AceEditor from "react-ace";
import axios from "axios";

import "brace/mode/java";
import "brace/mode/python";
import "brace/mode/haskell";
import "brace/mode/javascript";
import "brace/mode/c_cpp";
import "brace/mode/prolog";
import "brace/theme/monokai";

const url = "https://alexandria-lib-back.herokuapp.com/sse/editors/v2/";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aceEditorValue: "",
      id: "5c992f0922a4ae1086a46fd5",
      user: "User" + Math.floor(Math.random() * 10000)
    };

    this.eventSource = new EventSource(url + this.state.id);
    this.onChange = this.onChange.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.eventSource.addEventListener(
      "open",
      function(e) {
        console.log("onopen", e);
      },
      false
    );

    this.eventSource.addEventListener(
      "error",
      function(e) {
        console.log("onerror", e);
      },
      false
    );

    this.eventSource.addEventListener(
      "message",
      function(e) {
        console.log("onmessage", e);
      },
      false
    );

    this.eventSource.addEventListener("editor", e => {
      this.update(JSON.parse(e.data));
    });
  }

  update(param) {
    if (param.lastUser !== this.state.user) {
      console.log("in udpate", param);
      var x = param.text;
      this.setState({
        aceEditorValue: x.join("\n")
      });
    }
  }

  onChange(newValue) {
    axios.post(url+this.state.id, {
      id: this.state.id,
      text: newValue.split("\n"),
      location: null,
      lastUser: this.state.user
    });
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
      </div>
    );
  }
}

export default Editor;
