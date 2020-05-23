import ReactStars from 'react-rating-stars-component'
import React from 'react'

class StarRating extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rating: parseFloat(this.props.initialvalue),
			numratings: this.props.numratings,
			updatedratings: '',
			editable: true,
		}
	}

	onRatingChange = (newRating) => {
		const { rating, numratings, updatedratings} = this.state;
		const update = (rating+newRating)/(numratings+1);
		this.setState({rating: newRating, updatedratings: update, editable: false});
		this.onSubmitUpdate(update);
	}

	onSubmitUpdate = (update) => {
		console.log(update);
		fetch('https://salty-mountain-94369.herokuapp.com/ratingupdate', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				id: this.props.id,
				rating: update,
			})
		})
			.then(response => response.text())
			.then(text => console.log(text))
			.catch(err => console.log(err));
	}


	render() {
		return (
			<div>
			<ReactStars
		        size={50}
		        half={true}
		        edit={this.state.editable}
		        value={this.state.rating}
		        onChange={this.onRatingChange}
		    />
		    </div>
		);
	}
}


export default StarRating;