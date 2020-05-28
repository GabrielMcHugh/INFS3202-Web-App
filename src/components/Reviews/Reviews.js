import React from 'react';
import ReviewList from './ReviewList';

	//loads comments about the owner
	//peforms a get request from the server returning all the reviews about the owner
	//loads and displays the top three

	//Create the endpoint on the server that gives back the reviews in json
	//store the reviews in the state
	//use a for loop to create those reviews when they come in
	// have a loading reviews text appear if reviews haven't arrived yet

class Reviews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: [],
		}
	}

	componentDidMount() {	
		fetch('https://salty-mountain-94369.herokuapp.com/getreviews', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				item_id: this.props.item_id,
			})
		})
		.then(response=> response.json())
		.then(users => this.setState({ reviews: users}))
	}


	render (){
		return !this.state.reviews.length ? 
		<p className="ma3 b">This item has no reviews yet</p>
		: (
			<div>
				<p className="f6 b db mb2"> Other Users Reviews </p>
				<ReviewList reviews={this.state.reviews}/>
			</div>
		)
	}
}

export default Reviews;