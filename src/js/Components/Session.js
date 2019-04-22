/*eslint no-unused-vars: 0, no-console: 0*/

import React from "react";
import { CompactPicker } from "react-color";
// import 'flexboxgrid';
import "../../css/main.css";

import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CardHeader from "@material-ui/core/CardHeader";
import GridListTile from "@material-ui/core/GridListTile";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/lab/Slider";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Collapse from "@material-ui/core/Collapse";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import color from "@material-ui/core/colors/blueGrey";

import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import CopyIcon from "@material-ui/icons/FileCopy";
import RemoveIcon from "@material-ui/icons/Remove";
import DownloadIcon from "@material-ui/icons/CloudDownload";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
// import dataJson from './data.json';
// import dataJsonControlled from './data.json.controlled';
import { SketchField, Tools } from "react-sketch";
// import dataUrl from './data.url';
import DropZone from "react-dropzone";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import Editor  from "./Editor";
import  WhiteBoard  from './WhiteBoard'

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



class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected:"editor"
    };
  }

  _select = (value) => {
    if(value === "paint"){

    }else{

    }
  }

  render = () => {
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
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <AppBar title="Sketch Tool" position="static" style={styles.appBar}>
              <Toolbar>
              <Typography
                  variant="h6"
                  color="inherit"
                  style={{ marginRight: 18}}
                  onClick={() => {this.setState({selected:"editor"})}}
                >
                  Editor
                </Typography>
                <Typography
                  variant="h6"
                  color="inherit"
                  style={{ flexGrow: 1 }}
                  onClick={() => {this.setState({selected:"paint"})}}
                >
                  Paint
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
        </div>
        <div className="row">
          {this.state.selected === "paint" ? <WhiteBoard/> : <Editor/>}
        </div>
      </MuiThemeProvider>
    );
  };
}

export default Session;
