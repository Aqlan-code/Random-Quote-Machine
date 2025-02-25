import { fetchData } from "./fetching";

import React from "react";

class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			quote: '',
			author: '',
			copied: false,
			disabled: false
		}

		this.newQuote = this.newQuote.bind(this);
		this.copyQuote = this.copyQuote.bind(this);
	}

	newQuote() {

		this.setState({
			disabled: true
		});

		fetchData().then(data => {
			const { imgUrl, quoteData } = data;
			document.body.style.backgroundImage = `url(${imgUrl})`;
			const { quote, author } = quoteData[0];
			this.setState({
				quote,
				author,
				copied: false,
				disabled: false
			});
		});
	}

	copyQuote() {
		navigator.clipboard.writeText(this.state.quote).then(() => {
			this.setState({
				copied: true
			});
		});
	}

	componentDidMount() {
		this.newQuote();
		setTimeout(() => {
			document.querySelector('.dev').style.animation = 'fade-out 0.5s forwards';
		}, 6000);
	}
 
	render() {

		return (
			<div id="quote-box">
				<p id="text"><i className="fa fa-quote-left" /> {this.state.quote}</p>
				<p id="author">- {this.state.author}</p>
				<div className="btns-container">
					<div className="left-section">
						<a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${this.state.quote}`}><button><i className="fa fa-twitter"></i></button></a>
						<button disabled={this.state.disabled} onClick={this.copyQuote}><i className={!this.state.copied ? "fa fa-copy" : "fa fa-check"} style={this.state.copied ? {color: 'green'} : {color: 'white'}} /></button>
					</div>
					<button id="new-quote" disabled={this.state.disabled} onClick={this.newQuote}>New quote</button>
				</div>
			</div>
		);
	}
}


export default App