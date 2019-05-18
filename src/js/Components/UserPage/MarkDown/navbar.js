import '../../../../css/UserPage/markEdit.scss'
import React,{Component} from 'react'


import {ClearIcon,ExpandIcon,MinIcon,Button} from './components'

export default class NavBar extends Component {
	constructor(props) {
		super(props);
		this.fsToggle = this.fsToggle.bind(this);
	}

	fsToggle(e) {
		this.props.expand(this.props.heading);
	}

	render() {
		let buttons = [
			<Button  key={"button-clear-nav1"}
				handler={this.fsToggle}
				label={this.props.expanded ? "exit expanded view" : "expand view"}
				icon={this.props.expanded ? <MinIcon /> : <ExpandIcon />}
			/>
		];

		if (this.props.view === "editor") {
			buttons.unshift(
				<Button handler={this.props.clear} key={"button-clear-nav"}label="clear" icon={<ClearIcon />} />
			);
		}

		return (
			<header className="headNav">
				<h2 id={this.props.heading}>{this.props.heading}</h2>
				<nav>{buttons}</nav>
			</header>
		);
	}
}