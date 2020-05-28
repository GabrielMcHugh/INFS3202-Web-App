import React from 'react';
import MyCarousel from '../Carousel';

class Wishlist extends React.Component {
	//pass user id and item id to class
	//convert this.props.wishlist into camItems for Carousel

	componentDidMount(){
		if (this.props.userID) {this.loadWishList();}
	}

	loadWishList = () => {
		fetch('https://salty-mountain-94369.herokuapp.com/wishlist', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			id: this.props.userID,
		})
	})
		.then(response => response.json())
		.then(user => {
			if (user) {
				this.props.updateWishList(user);
			}
		}).catch(err => console.log(err));
	}

	componentDidUpdate() {
		console.log('component updated')
		console.log(this.props.wishlist)
	}

	//Now use componneet update to convert the data into Carousel info
	//wishlist is an array of objects [ {...}, {...}]
	//camItems is also an array of objects
	//you need to filter the items array based on weather it matches the ids within wishlist


	render() {
		return (
			<div>
			<h1 className="mv3 mh1 b">Your Wish List</h1>
				{ !this.props.userID ?	
					<p className="f6 no-underline ph3 pv2 mb2">Sign in to see your wish list</p>
					:<MyCarousel
			  			camItems={this.props.wishlist}
			  			onRouteChange={this.onRouteChange}
			  			loadCard={this.loadCard}
			  		/>
				} 
			</div>
		)
	}
}

export default Wishlist;