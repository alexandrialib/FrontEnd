/*eslint no-unused-vars: 0, no-console: 0*/

import React from "react";
import "../../css/main.css";
import { Link as RouterLink } from 'react-router-dom'
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
import Modal from 'react-bootstrap/Modal'
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import Share from "@material-ui/icons/Share"
import MenuIcon from '@material-ui/icons/Menu';
import AddIco from '@material-ui/icons/Add';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
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
    const articleUrl= window.location.pathname;
    var urlsplit = articleUrl.split("/");
    this.state = {
      show:false,
      selected:"editor",
      id:urlsplit[2]
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.copy = this.copy.bind(this);
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  _select = (value) => {
    if(value === "paint"){

    }else{

    }
  }
  componentDidMount(){  
    var rand =  1 + (Math.random() * (1000-1));
    var random=Math.floor(rand);
  }
  
  copy() {
   
    this.elRef.select();
    document.execCommand("copy");
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
    const MyLink = props => <RouterLink to={"/session/"+this.state.id}/>


    return (
      <MuiThemeProvider theme={theme}>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <AppBar title="Sketch Tool" position="static" style={styles.appBar}>
              <Toolbar>
              <RouterLink to={"/"} style={{color:"white"}}>
              <Typography
              variant="h6"
              color="inherit"
              style={{ marginRight:20}}
              >
                Home 
              </Typography>
              </RouterLink>
              <RouterLink to={"/session/"+this.state.id} style={{color:"white"}}>
              
              <Typography
                  variant="h6"
                  color="inherit"
                 
                  style={{ marginRight:20}}
                  onClick={() => {this.setState({selected:"editor"})}}
                >
                  Editor
                </Typography></RouterLink>
                <RouterLink to={"/session/"+this.state.id} style={{color:"white"}}>
                <Typography
                  variant="h6"
                  color="inherit"
               
                  style={{ marginRight:20}}
                  onClick={() => {this.setState({selected:"paint"})}}
                >
                  Paint
                </Typography></RouterLink>
                <IconButton color="inherit" onClick={this.handleShow}>
              <Share 
              style={{ color:"white",float:"left"}}
               color="inherit"/>
            </IconButton>
                <div>
         
        
            <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Share session </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <input className="share-input" id="url-input" ref={el => this.elRef = el} value={window.location.href} />
          </Modal.Body>
          <Modal.Footer>
            
          <p><button class="btn-right" style={{ color:"beige"}} onClick={this.copy}><a>Copy</a></button></p>
            <p><button class="btn-right" style={{ color:"beige"}} onClick={this.handleClose}><a>Cancel</a></button></p>
           
          </Modal.Footer>
        </Modal>
          </div>
                
              </Toolbar>
            </AppBar>
          </div>
        </div>
        <div className="row">
          {this.state.selected === "paint" ? <WhiteBoard id={this.state.id} />
           : <Editor id={this.state.id} />}
        </div>
      </MuiThemeProvider>
    );
  };
}

export default Session;
