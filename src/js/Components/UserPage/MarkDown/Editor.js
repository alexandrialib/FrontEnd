import '../../../../css/UserPage/markEdit.scss'
import React,{Component} from 'react'

import NavBar from './navbar'


export default class Editor extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section
				className={
					"pane pane__edit" +
					(this.props.expanded === "Markdown"
						? " expanded"
						: this.props.expanded === "Preview" ? " minimize" : "")
				}
			>
				<NavBar
					heading="Markdown"
					clear={this.props.clear}
					expand={this.props.expanding}
					view="editor"
					expanded={this.props.expanded === "Markdown"}
				/>
				<textarea
					aria-labelledby="Markdown"
					id="editor"
					value={this.props.markdown}
					onChange={this.props.handler}
				/>
			</section>
		);
	}
}