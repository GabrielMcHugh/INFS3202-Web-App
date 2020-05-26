import React from 'react';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	//I could pass the item object from cardlist straight into the props and load it into the state. May do that later. For now just gonna load the details

	onClickHandler = () => {
		const { name, price, type, rating, id, numratings, onRouteChange, loadCard } = this.props;
		onRouteChange('card');
		loadCard(this.titleize(name), price, type, rating, id, numratings);
	}

	titleize = (sentence) => {
	    if(!sentence.split) return sentence;
	    var _titleizeWord = function(string) {
	            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	        },
	        result = [];
	   		sentence.split(" ").forEach(function(w) {
	        result.push(_titleizeWord(w));
	    });
	    return result.join(" ");
	}


	render() {
		return (
			<div className='bg-white dib br3 pa3 ma2 grow bw2 shadow-5 pointer' style={{zIndex: '1'}} onClick={this.onClickHandler}>
				<div>
					<p>{this.titleize(this.props.name)}</p>
					<h1>${this.props.price}</h1>
				</div>
			</div>
		)
	}
}

export default Card;