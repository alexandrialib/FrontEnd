import '../../../../css/UserPage/markEdit.scss'
import React,{Component} from 'react'
import ArticleForm from './postArticle/newArticleForm'
import NavBari from './../../NavBar'
import Editor from './Editor'
import Preview from './preview'
import {postArticle, getUserbyUsername} from '../../../DataProvider'
import NewArticleBox from '../MarkDown/postArticle/newArticleBox'



export default class Appi extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user:{},
			markdown: [
				"# Lorem ipsum !\n\n",
				"![Meet the new boss](https://www.newscredit.org/wp-content/uploads/2019/02/Software-Development-2.jpg)\n\n",
				`> “enim blandit volutpat maecenas volutpat blandit aliquam etiam.” ― Charles Dickens\n\n`,
				"## hffhfhfhfuuewiquggsgsufg \n\n",
				`Habitant morbi tristique senectus et. Elementum sagittis vitae et leo duis ut diam quam nulla. Augue mauris augue neque gravida in. Arcu non odio euismod lacinia at quis risus sed. Tellus molestie nunc non blandit. Nibh tellus molestie nunc non blandit massa enim nec. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Donec massa sapien faucibus et molestie. Aliquet porttitor lacus luctus accumsan tortor. Pretium lectus quam id leo in vitae turpis. Id nibh tortor id aliquet. Elementum eu facilisis sed odio morbi quis commodo..\n\n`,
				"vitae justo eget magna fermentum. Aliquet eget sit amet tellus cras`esc` button.\n\n",
				`Looking at some **JavaScript** might help you better understand what is going on, so here's a code sample to bring you up to speed:\n\n`,
				"```javascript\n const inCharge = who => {\n\tif (who === 'hgdrumans') {\n \t\treturn `I'Sodales ut eu sem integer vitae justo eget magna fermentum 'dddsdf'.`;\n\t} else if (who === 'dogs') {\n\t\t return `TSodales ut eu sem integer vitae justo eget magna fermentumell 'cats'.`;\n  \t}\n\n\treturn `uet porttitor lacus luct.`;\n};```\n\n",
				,
				"## Vitae ultricies leo intrge\n\n",
				`CVitae ultricies leo integer malesuada nunc vel. Sodales ut eu sem integer vitae justo eget magna fermentum. nunc eget sit amet tellus crasmmediately impress your new cat overlords.\n\n
`,
				"- **em inuet eget sit amet tellus cras**\n\n",
				`\tUp until now, you've been living under the impression that everything you own belongs to you. In reality, you have just been a keeper of items. Now that cats are officially in charge, you will quickly learn that what's yours is theirs and what's theirs is also theirs.\n\n`,
				"- **Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Amet venenatis urna cursus eget nunc scelerisque. Duis at consectetur lorem donec massa sapien faucibus et. Vitae ultricies leo integer malesuada nunc vel. Sodales ut eu sem integer vitae justo eget magna fermentum. Aliquet eget sit amet tellus cras. od**\n\n",
				`\tI kSagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Amet venenatis urna cursus eget nunc scelerisque. Duis at consectetur lorem donec massa sapien faucibus et. Vitae ultricies leo integer malesuada nunc vel. Sodales ut eu sem integer vitae justo eget magna fermentum. Aliquet eget sit amet tellus cras. me on their own.
\n\tAll cats come with built in alarms. For the cat's safety, these alarms can only be turned off by putting down fresh food.\n\n`,
				"- **NSagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Amet venenatis urna cursus eget nunc scelerisque. Duis at consectetur lorem donec massa sapien faucibus et. Vitae ultricies leo integer malesuada nunc vel. Sodales ut eu sem integer vitae justo eget magna fermentum. Aliquet eget sit amet tellus cras. t zones***\n\n",
				`\tBut also be Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Amet venenatis urna cursus eget nunc scelerisque. Duis at consectetur lorem donec massa sapien faucibus et. Vitae ultricies leo integer malesuada nunc vel. Sodales ut eu sem integer vitae justo eget magna fermentum. Aliquet eget sit amet tellus cras. ot too many because then you will cause overstimulation in the cat, and you will be punished.

\n\n ** \tpermittSagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Amet venenatis urna cursus eget nunc scelerisque. Duis at consectetur lorem donec massa sapien faucibus et. Vitae ultricies leo integer malesuada nunc vel. Sodales ut eu sem integer vitae justo eget magna fermentum. Aliquet eget sit amet tellus cras. m second to second.*
`
			].join(""),
			markup: "",
			status: "",
			isExpanded: false,
			fsPane: ""
		};

		this.updateMarkdown = this.updateMarkdown.bind(this);
		this.clear = this.clear.bind(this);
		this.expand = this.expand.bind(this);
	}

	expand(val) {
		if (val === this.state.fsPane) {
			this.setState({
				isExpanded: false,
				fsPane: ""
			});
		} else if (this.fsPane && this.isExpanded) {
			this.setState({
				fsPane: val
			});
		} else {
			this.setState({
				fsPane: val,
				isExpanded: true
			});
		}
	}

	updateMarkdown(e) {
		if (this.state.status) {
			this.setState({
				status: ""
			});
		}

		this.setState({
			markdown: e.target.value
		});
	}

	clear() {
		this.setState({
			markdown: "",
			status: "Markdown cleared"
		});
	}
	async componentDidMount(){
		const post =await getUserbyUsername(this.props.location.state.user,this.props.location.state.pass);
		this.setState({user:post})
		}
	async addArticle(category){
        postArticle(category.category,{"title":category.title,"content":this.state.markdown,"author":this.state.user});   
    }

	render() {
		return (
			<div className="markdown-app">
            <NavBari />
			
					
			<ArticleForm onCommentSubmit={category => this.addArticle(category)} />
					
				
				<main className="panes">
					<Editor
						handler={this.updateMarkdown}
						markdown={this.state.markdown}
						clear={this.clear}
						expanding={this.expand}
						expanded={this.state.fsPane}
						isExpanded={this.state.isExpanded}
					/>
					<Preview
						markdown={this.state.markdown}
						expanding={this.expand}
						expanded={this.state.fsPane}
						isExpanded={this.state.isExpanded}
					/>
				</main>
				<p className="sr-only" id="status" aria-live="polite">
					{this.state.status}
				</p>
			</div>
		);
	}
}


