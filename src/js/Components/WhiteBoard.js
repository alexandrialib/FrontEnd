/*eslint no-unused-vars: 0, no-console: 0*/

import React from "react";
import { CompactPicker } from "react-color";
import axios from "axios";
import { URL } from "../DataProvider";

import "../../css/main.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/lab/Slider";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Collapse from "@material-ui/core/Collapse";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import color from "@material-ui/core/colors/blueGrey";

import AddIcon from "@material-ui/icons/Add";
import CopyIcon from "@material-ui/icons/FileCopy";
import RemoveIcon from "@material-ui/icons/Remove";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import { SketchField, Tools } from "react-sketch";
import Typography from "@material-ui/core/Typography/Typography";

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

const url = URL + "/sse/paints/";

class WhiteBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastState: {
        version: "2.4.3",
        objects: [],
        background: "transparent"
      },
      id: "5c992f0922a4ae1086a46fd5",
      lineWidth: 10,
      lineColor: "black",
      fillColor: "#68CCCA",
      backgroundColor: "transparent",
      shadowWidth: 0,
      shadowOffset: 0,
      tool: Tools.Pencil,
      enableRemoveSelected: false,
      fillWithColor: false,
      fillWithBackgroundColor: false,
      drawings: [],
      canUndo: false,
      canRedo: false,
      controlledSize: false,
      sketchWidth: 600,
      sketchHeight: 600,
      stretched: true,
      stretchedX: false,
      stretchedY: false,
      originX: "left",
      originY: "top",
      expandTools: false,
      expandControls: false,
      expandColors: false,
      expandBack: false,
      expandImages: false,
      expandControlled: false,
      text: "a text, cool!",
      enableCopyPaste: false
    };
    this.eventSource = new EventSource(url + this.state.id);
  }

  update(param) {
    if (param !== null) {
      console.log(param);
      this._sketch.fromJSON(param);
    }
    // if (param.lastUser !== this.state.user) {
    //   console.log("in udpate", param);
    //   var x = param.text;
    //   this.setState({
    //     aceEditorValue: x.join("\n")
    //   });
    // }
  }

  _selectTool = event => {
    this.setState({
      tool: event.target.value,
      enableRemoveSelected: event.target.value === Tools.Select,
      enableCopyPaste: event.target.value === Tools.Select
    });
  };

  _save = () => {
    let drawings = this.state.drawings;
    drawings.push(this._sketch.toDataURL());
    this.setState({ drawings: drawings });
  };

  _download = () => {
    console.save(this._sketch.toDataURL(), "toDataURL.txt");
    console.save(JSON.stringify(this._sketch.toJSON()), "toDataJSON.txt");

    /*eslint-enable no-console*/

    let { imgDown } = this.refs;
    let event = new Event("click", {});

    imgDown.href = this._sketch.toDataURL();
    imgDown.download = "toPNG.png";
    imgDown.dispatchEvent(event);
  };

  _removeMe = index => {
    let drawings = this.state.drawings;
    drawings.splice(index, 1);
    this.setState({ drawings: drawings });
  };

  _clear = () => {
    this._sketch.clear();
    this._sketch.setBackgroundFromDataUrl("");
    this.setState({
      controlledValue: null,
      backgroundColor: "transparent",
      fillWithBackgroundColor: false,
      canUndo: this._sketch.canUndo(),
      canRedo: this._sketch.canRedo()
    });
  };

  _removeSelected = () => {
    this._sketch.removeSelected();
  };

  _onSketchChange = () => {
    if (
      JSON.stringify(this._sketch.toJSON()) ==
      JSON.stringify(this.state.lastState)
    ) {
      console.log("igual, no cambio");
    } else {
      this.setState({ lastState: this._sketch.toJSON() });
      axios.put(url + this.state.id, this._sketch.toJSON());
      let prev = this.state.canUndo;
      let now = this._sketch.canUndo();
      if (prev !== now) {
        this.setState({ canUndo: now });
      }
    }
  };

  _addText = () => this._sketch.addText(this.state.text);

  componentDidMount = () => {
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

    this.eventSource.addEventListener("paint", e => {
      this.update(JSON.parse(e.data));
    });
  };

  render = () => {
    let { controlledValue } = this.state;
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
            <SketchField
              name="sketch"
              className="canvas-area"
              ref={c => (this._sketch = c)}
              lineColor={this.state.lineColor}
              lineWidth={this.state.lineWidth}
              fillColor={
                this.state.fillWithColor ? this.state.fillColor : "transparent"
              }
              backgroundColor={
                this.state.fillWithBackgroundColor
                  ? this.state.backgroundColor
                  : "transparent"
              }
              width={this.state.controlledSize ? this.state.sketchWidth : null}
              height={
                this.state.controlledSize ? this.state.sketchHeight : null
              }
              // defaultValue={dataJson}
              value={controlledValue}
              forceValue
              onChange={this._onSketchChange}
              tool={this.state.tool}
            />
          </div>
          <div className="col-xs-5 col-sm-5 col-md-3 col-lg-3">
            <Card style={styles.card}>
              <CardHeader
                title="Tools"
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
                        value={this.state.tool}
                        onChange={this._selectTool}
                        helperText="Please select Canvas Tool"
                      >
                        <MenuItem value={Tools.Select} key="Select">
                          Select
                        </MenuItem>
                        <MenuItem value={Tools.Pencil} key="Pencil">
                          Pencil
                        </MenuItem>
                        <MenuItem value={Tools.Line} key="Line">
                          Line
                        </MenuItem>
                        <MenuItem value={Tools.Rectangle} key="Rectangle">
                          Rectangle
                        </MenuItem>
                        <MenuItem value={Tools.Circle} key="Circle">
                          Circle
                        </MenuItem>
                        <MenuItem value={Tools.Pan} key="Pan">
                          Pan
                        </MenuItem>
                      </TextField>
                    </div>
                  </div>
                  <br />
                  <br />
                  <Typography id="slider">Line Weight</Typography>
                  <Slider
                    step={1}
                    min={0}
                    max={100}
                    aria-labelledby="slider"
                    value={this.state.lineWidth}
                    onChange={(e, v) => this.setState({ lineWidth: v })}
                  />
                  <br />
                  <label htmlFor="zoom">Zoom</label>
                  <div>
                    <IconButton onClick={e => this._sketch.zoom(1.25)}>
                      <ZoomInIcon />
                    </IconButton>
                    <IconButton onClick={e => this._sketch.zoom(0.8)}>
                      <ZoomOutIcon />
                    </IconButton>
                  </div>
                  <div className="row">
                    <div className="col-lg-7">
                      <TextField
                        label="Text"
                        helperText="Add text to Sketch"
                        onChange={e => this.setState({ text: e.target.value })}
                        value={this.state.text}
                      />
                    </div>
                    <div className="col-lg-3">
                      <IconButton color="primary" onClick={this._addText}>
                        <AddIcon />
                      </IconButton>
                    </div>
                  </div>
                </CardContent>
              </Collapse>
            </Card>
            <Card style={styles.card}>
              <CardHeader
                title="Controls"
                subheader="Copy/Paste etc."
                action={
                  <IconButton
                    onClick={e =>
                      this.setState({
                        expandControls: !this.state.expandControls
                      })
                    }
                  >
                    <ExpandMore />
                  </IconButton>
                }
              />
              <Collapse in={this.state.expandControls}>
                <CardContent>
                  <div className="row">
                    <div className="col-lg-12">
                      <FormControlLabel
                        control={
                          <Switch
                            value={this.state.controlledSize}
                            onChange={e =>
                              this.setState({
                                controlledSize: !this.state.controlledSize
                              })
                            }
                          />
                        }
                        label="Control size"
                      />
                      <br />
                      <Typography id="xSize">Change Canvas Width</Typography>
                      <Slider
                        step={1}
                        min={10}
                        max={1000}
                        value={this.state.sketchWidth}
                        onChange={(e, v) => this.setState({ sketchWidth: v })}
                      />
                      <br />
                      <Typography id="ySize">Change Canvas Height</Typography>
                      <Slider
                        step={1}
                        min={10}
                        max={1000}
                        value={this.state.sketchHeight}
                        onChange={(e, v) => this.setState({ sketchHeight: v })}
                      />
                      <br />
                    </div>
                  </div>
                  <label htmlFor="zoom">
                    Selection Actions (Select an object first!)
                  </label>
                  <div className="row">
                    <div className="col">
                      <IconButton
                        color="primary"
                        disabled={!this.state.enableCopyPaste}
                        onClick={e => {
                          this._sketch.copy();
                          this._sketch.paste();
                        }}
                      >
                        <CopyIcon />
                      </IconButton>
                    </div>
                    <div className="col">
                      <IconButton
                        color="primary"
                        disabled={!this.state.enableRemoveSelected}
                        onClick={this._removeSelected}
                      >
                        <RemoveIcon />
                      </IconButton>
                    </div>
                  </div>
                </CardContent>
              </Collapse>
            </Card>
            <Card style={styles.card}>
              <CardHeader
                title="Colors"
                subheader="Put some color on your drawing"
                action={
                  <IconButton
                    onClick={e =>
                      this.setState({ expandColors: !this.state.expandColors })
                    }
                  >
                    <ExpandMore />
                  </IconButton>
                }
              />
              <Collapse in={this.state.expandColors}>
                <CardContent>
                  <label htmlFor="lineColor">Line</label>
                  <br />
                  <CompactPicker
                    id="lineColor"
                    color={this.state.lineColor}
                    onChange={color => this.setState({ lineColor: color.hex })}
                  />
                  <br />
                  <br />
                  <FormControlLabel
                    control={
                      <Switch
                        value={this.state.fillWithColor}
                        onChange={e =>
                          this.setState({
                            fillWithColor: !this.state.fillWithColor
                          })
                        }
                      />
                    }
                    label="Fill"
                  />
                  <CompactPicker
                    color={this.state.fillColor}
                    onChange={color => this.setState({ fillColor: color.hex })}
                  />
                </CardContent>
              </Collapse>
            </Card>
            <Card style={styles.card}>
              <CardHeader
                title="Background"
                subheader="Background of drawing"
                action={
                  <IconButton
                    onClick={e =>
                      this.setState({ expandBack: !this.state.expandBack })
                    }
                  >
                    <ExpandMore />
                  </IconButton>
                }
              />
              <Collapse in={this.state.expandBack}>
                <CardContent>
                  <FormControlLabel
                    label="Background Color"
                    control={
                      <Switch
                        value={this.state.fillWithBackgroundColor}
                        onChange={e =>
                          this.setState({
                            fillWithBackgroundColor: !this.state
                              .fillWithBackgroundColor
                          })
                        }
                      />
                    }
                  />
                  <CompactPicker
                    color={this.state.backgroundColor}
                    onChange={color =>
                      this.setState({ backgroundColor: color.hex })
                    }
                  />
                  <br />
                  <br />
                  <label htmlFor="lineColor">Set Image Background</label>
                  <br />
                  <FormControlLabel
                    label="Fit canvas (X,Y)"
                    control={
                      <Switch
                        value={this.state.stretched}
                        onChange={e =>
                          this.setState({ stretched: !this.state.stretched })
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    label="Fit canvas (X)"
                    control={
                      <Switch
                        value={this.state.stretchedX}
                        onChange={e =>
                          this.setState({ stretchedX: !this.state.stretchedX })
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    label="Fit canvas (Y)"
                    control={
                      <Switch
                        value={this.state.stretchedY}
                        onChange={e =>
                          this.setState({ stretchedY: !this.state.stretchedY })
                        }
                      />
                    }
                  />
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </div>
      </MuiThemeProvider>
    );
  };
}

export default WhiteBoard;
