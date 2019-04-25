import React, { Component } from "react";
import AceEditor from "react-ace";
import axios from "axios";
import {URL} from '../DataProvider'


import "../../css/main.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Collapse from "@material-ui/core/Collapse";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import color from "@material-ui/core/colors/blueGrey";


import "brace/mode/java";
import "brace/mode/python";
import "brace/mode/haskell";
import "brace/mode/javascript";
import "brace/mode/c_cpp";
import "brace/mode/prolog";
import "brace/theme/monokai";
import "brace/theme/github";
import "brace/theme/tomorrow";
import "brace/theme/kuroir";
import "brace/theme/twilight";
import "brace/theme/xcode";
import "brace/theme/textmate";
import "brace/theme/solarized_dark";
import "brace/theme/solarized_light";
import "brace/theme/terminal";

const styles = {
  root: {
    padding: "3px",
    display: "flex",
    flexWrap: "wrap",
    margin: "10px 10px 5px 10px",
    justifyContent: "space-around"
  },
  gridList: {
    width: "100%",
    overflowY: "auto",
    marginBottom: "24px"
  },
  gridTile: {
    backgroundColor: "#fcfcfc"
  },
  appBar: {
    backgroundColor: "#333"
  },
  radioButton: {
    marginTop: "3px",
    marginBottom: "3px"
  },
  separator: {
    height: "42px",
    backgroundColor: "white"
  },
  iconButton: {
    fill: "white",
    width: "42px",
    height: "42px"
  },
  dropArea: {
    width: "100%",
    height: "64px",
    border: "2px dashed rgb(102, 102, 102)",
    borderStyle: "dashed",
    borderRadius: "5px",
    textAlign: "center",
    paddingTop: "20px"
  },
  activeStyle: {
    borderStyle: "solid",
    backgroundColor: "#eee"
  },
  rejectStyle: {
    borderStyle: "solid",
    backgroundColor: "#ffdddd"
  },
  card: {
    margin: "10px 10px 5px 0"
  }
};

const url = URL+"/sse/editors/v2/";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aceEditorValue: "",
      id: "5c992f0922a4ae1086a46fd5",
      user: "User" + Math.floor(Math.random() * 10000),
      expandTools: true,
      fontSize: 14,
      mode: "javascript",
      theme: "monokai"
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
    axios.post(url + this.state.id, {
      id: this.state.id,
      text: newValue.split("\n"),
      location: null,
      lastUser: this.state.user
    });
    this.setState({
      aceEditorValue: newValue
    });
  }

  _selectMode = event => {
    this.setState({
      mode: event.target.value
    });
  };

  _selectTheme = event => {
    this.setState({
      theme: event.target.value
    });
  };

  render() {
    const theme = createMuiTheme({
      typography: {
        useNextVariants: true
      },
      palette: {
        primary: { main: color[500] }, // Purple and green play nicely together.
        secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
      }
    });
    return (
      <MuiThemeProvider theme={theme}>
        <div className="row">
          <div className="col-xs-7 col-sm-7 col-md-9 col-lg-9">
            <div className="App">
              <AceEditor
                style={{ width: "100%" }}
                editorProps={{ $blockScrolling: true }}
                mode={this.state.mode}
                onChange={this.onChange}
                theme={this.state.theme}
                value={this.state.aceEditorValue}
                placeholder="Welcome to Alexandria Editor! 🥳"
                fontSize={this.state.fontSize}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                  showLineNumbers: true,
                  tabSize: 2
                }}
              />
            </div>
          </div>

          <div className="col-xs-5 col-sm-5 col-md-3 col-lg-3">
            <Card style={styles.card}>
              <CardHeader
                title="Options"
                subheader="Available tools"
                action={
                  <IconButton
                    onClick={e =>
                      this.setState({ expandTools: !this.state.expandTools })
                    }
                  >
                    <ExpandMore />
                  </IconButton>
                }
              />
              <Collapse in={this.state.expandTools}>
                <CardContent>
                  <div className="row">
                    <div className="col-lg-12">
                      <TextField
                        select={true}
                        label="Canvas Tool"
                        value={this.state.mode}
                        onChange={this._selectMode}
                        helperText="Please select your favorite programming language"
                      >
                        <MenuItem key="javascript" value="javascript">
                          javascript
                        </MenuItem>
                        <MenuItem key="java" value="java">
                          java
                        </MenuItem>
                        <MenuItem key="python" value="python">
                          python
                        </MenuItem>
                        <MenuItem key="xml" value="xml">
                          xml
                        </MenuItem>
                        <MenuItem key="ruby" value="ruby">
                          ruby
                        </MenuItem>
                        <MenuItem key="sass" value="sass">
                          sass
                        </MenuItem>
                        <MenuItem key="markdown" value="markdown">
                          markdown
                        </MenuItem>
                        <MenuItem key="mysql" value="mysql">
                          mysql
                        </MenuItem>
                        <MenuItem key="json" value="json">
                          json
                        </MenuItem>
                        <MenuItem key="html" value="html">
                          html
                        </MenuItem>
                        <MenuItem key="handlebars" value="handlebars">
                          handlebars
                        </MenuItem>
                        <MenuItem key="golang" value="golang">
                          golang
                        </MenuItem>
                        <MenuItem key="csharp" value="csharp">
                          csharp
                        </MenuItem>
                        <MenuItem key="elixir" value="elixir">
                          elixir
                        </MenuItem>
                        <MenuItem key="typescript" value="typescript">
                          typescript
                        </MenuItem>
                        <MenuItem key="css" value="css">
                          css
                        </MenuItem>
                      </TextField>
                      <br />
                      <br />
                      <br />
                      <TextField
                        select={true}
                        label="Canvas Tool"
                        value={this.state.theme}
                        onChange={this._selectTheme}
                        helperText="Please Select a theme"
                      >
                        <MenuItem key="monokai" value="monokai">
                          monokai
                        </MenuItem>
                        <MenuItem key="github" value="github">
                          github
                        </MenuItem>
                        <MenuItem key="tomorrow" value="tomorrow">
                          tomorrow
                        </MenuItem>
                        <MenuItem key="kuroir" value="kuroir">
                          kuroir
                        </MenuItem>
                        <MenuItem key="twilight" value="twilight">
                          twilight
                        </MenuItem>
                        <MenuItem key="xcode" value="xcode">
                          xcode
                        </MenuItem>
                        <MenuItem key="textmate" value="textmate">
                          textmate
                        </MenuItem>
                        <MenuItem key="solarized_dark" value="solarized_dark">
                          solarized_dark
                        </MenuItem>
                        <MenuItem key="solarized_light" value="solarized_light">
                          solarized_light
                        </MenuItem>
                        <MenuItem key="terminal" value="terminal">
                          terminal
                        </MenuItem>
                      </TextField>
                      <br />
                      <br />
                      <TextField
                        label="Font Size"
                        onChange={e =>
                          this.setState({ fontSize: parseInt(e.target.value) })
                        }
                        type="number"
                        value={this.state.fontSize}
                      />
                    </div>
                  </div>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Editor;
