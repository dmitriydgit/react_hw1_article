import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


var ARTICLES = [
	{
		id: 1,
		articleDescr: 'Life style',
		articleAuthor: "Epicur",
		articleText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus urna ut arcu consectetur rhoncus. Aliquam erat volutpat. Donec ullamcorper nibh quis libero fermentum, in posuere purus volutpat. Sed a cursus ante. Mauris fermentum, arcu vel iaculis faucibus, lacus nisi laoreet risus, at dapibus est quam non orci. Pellentesque lacinia tristique metus et mattis. Aliquam accumsan erat eget mi sagittis, pellentesque blandit lorem convallis. Aliquam accumsan odio orci, ultricies dapibus eros euismod sit amet. Praesent non leo quis leo vehicula interdum. Morbi quam sem, vulputate et ipsum sed, hendrerit aliquet neque. Nam bibendum eget mauris in elementum. Sed tincidunt lorem sit amet auctor consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque in augue lacus."
	},
	{
		id: 2,
		articleDescr: 'Astronomy',
		articleAuthor: "Galileo Galiley",
		articleText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus urna ut arcu consectetur rhoncus. Aliquam erat volutpat. Donec ullamcorper nibh quis libero fermentum, in posuere purus volutpat. Sed a cursus ante. Mauris fermentum, arcu vel iaculis faucibus, lacus nisi laoreet risus, at dapibus est quam non orci. Pellentesque lacinia tristique metus et mattis. Aliquam accumsan erat eget mi sagittis, pellentesque blandit lorem convallis. Aliquam accumsan odio orci, ultricies dapibus eros euismod sit amet. Praesent non leo quis leo vehicula interdum. Morbi quam sem, vulputate et ipsum sed, hendrerit aliquet neque. Nam bibendum eget mauris in elementum. Sed tincidunt lorem sit amet auctor consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque in augue lacus."

	},
	{
		id: 3,
		articleDescr: 'Building',
		articleAuthor: "Piezza people",
		articleText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus urna ut arcu consectetur rhoncus. Aliquam erat volutpat. Donec ullamcorper nibh quis libero fermentum, in posuere purus volutpat. Sed a cursus ante. Mauris fermentum, arcu vel iaculis faucibus, lacus nisi laoreet risus, at dapibus est quam non orci. Pellentesque lacinia tristique metus et mattis. Aliquam accumsan erat eget mi sagittis, pellentesque blandit lorem convallis. Aliquam accumsan odio orci, ultricies dapibus eros euismod sit amet. Praesent non leo quis leo vehicula interdum. Morbi quam sem, vulputate et ipsum sed, hendrerit aliquet neque. Nam bibendum eget mauris in elementum. Sed tincidunt lorem sit amet auctor consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque in augue lacus."

	},
	{
		id: 4,
		articleDescr: "Politics",
		articleAuthor: "Julius Cesar",
		articleText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus urna ut arcu consectetur rhoncus. Aliquam erat volutpat. Donec ullamcorper nibh quis libero fermentum, in posuere purus volutpat. Sed a cursus ante. Mauris fermentum, arcu vel iaculis faucibus, lacus nisi laoreet risus, at dapibus est quam non orci. Pellentesque lacinia tristique metus et mattis. Aliquam accumsan erat eget mi sagittis, pellentesque blandit lorem convallis. Aliquam accumsan odio orci, ultricies dapibus eros euismod sit amet. Praesent non leo quis leo vehicula interdum. Morbi quam sem, vulputate et ipsum sed, hendrerit aliquet neque. Nam bibendum eget mauris in elementum. Sed tincidunt lorem sit amet auctor consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque in augue lacus."

	},
	{
		id: 5,
		articleDescr: 'Sport',
		articleAuthor: "Mohhamed Ali",
		articleText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus urna ut arcu consectetur rhoncus. Aliquam erat volutpat. Donec ullamcorper nibh quis libero fermentum, in posuere purus volutpat. Sed a cursus ante. Mauris fermentum, arcu vel iaculis faucibus, lacus nisi laoreet risus, at dapibus est quam non orci. Pellentesque lacinia tristique metus et mattis. Aliquam accumsan erat eget mi sagittis, pellentesque blandit lorem convallis. Aliquam accumsan odio orci, ultricies dapibus eros euismod sit amet. Praesent non leo quis leo vehicula interdum. Morbi quam sem, vulputate et ipsum sed, hendrerit aliquet neque. Nam bibendum eget mauris in elementum. Sed tincidunt lorem sit amet auctor consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque in augue lacus."

	}

]



class Article extends React.Component {

	render() {
		return (
			<div className="article" >
				<h1 className="article-descr"> {this.props.articleDescr} </h1>
				<p className="article-text">	{this.props.articleText} </p>
				<h3 className="article-author"> <i>by {this.props.articleAuthor} </i></h3>
			</div>
		)

	}
}


class Articles extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: ARTICLES
		}

	}

	render() {
		return (
			<div> {this.state.articles.map(function (el) {
				return (
					<Article
						key={el.id}
						articleDescr={el.articleDescr}
						articleAuthor={el.articleAuthor}
						articleText={el.articleText}
					/>
				)
			})}
			</div>
		)
	}
}


ReactDOM.render(<Articles />, document.getElementById('root'));