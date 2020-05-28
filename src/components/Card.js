import React from 'react';
import cam1 from '../images/camera4.jpeg'
import cam2 from '../images/camera2.jpeg'

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imagerand: 0,
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

	imagealternator = () => {
		if ((Math.floor(Math.random() * 2)) === 1) {
			return cam1
		} else {
			return cam2
		}
	}


	render() {
		return (
			<div className='bg-white dib br3 pa3 ma2 grow bw2 shadow-5 pointer' style={{zIndex: '1'}} onClick={this.onClickHandler}>
				<div>
					<p>{this.titleize(this.props.name)}</p>
					<img src={this.imagealternator()} alt="img here"/>
					<h1>${this.props.price}</h1>
				</div>
			</div>
		)
	}
}

export default Card;