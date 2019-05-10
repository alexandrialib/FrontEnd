import '../../../../css/UserPage/markEdit.scss'
import React,{Component} from 'react'

import marked from 'marked';
import NavBar from './navbar'

export default class Preview extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const markup = marked(this.props.markdown, {
			sanitze: true,
			gfm: true,
			breaks: true,
			headerIds: true
		});

		return (
			<section
				className={
					"pane pane__preview" +
					(this.props.expanded === "Preview"
						? " expanded"
						: this.props.expanded === "Markdown" ? " minimize" : "")
				}
			>
				<NavBar
					heading="Preview"
					expand={this.props.expanding}
					expanded={this.props.expanded === "Preview"}
				/>
				<div
					id="preview"
					className="pane__preview-output"
					dangerouslySetInnerHTML={{ __html: markup }}
				/>
			</section>
		);
	}
}