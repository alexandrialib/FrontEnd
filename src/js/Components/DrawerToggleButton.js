import React from 'react';

/*export default class DrawerToggleButton extends Component{

}*/
import '../../css/drawerTogglebutton.css'

const drawerToggleButton = props =>(
    <button className="toggle-button">
        <div className="toggle-button-line" />
        <div className="toggle-button-line"  />
        <div className="toggle-button-line" />
    </button>

);

export default drawerToggleButton;