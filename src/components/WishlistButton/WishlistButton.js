import React from 'react';

class WishlistButton extends React.Component {
	//pass user id and item id to class
	//

	onSubmitUpdate = (update) => {
		fetch('https://salty-mountain-94369.herokuapp.com/wishlistupdate', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				id: this.props.userID,
				itemid: this.props.itemID,
			})
		})
			.then(response => response.text())
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div class="mh3 f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green"
			onClick={this.onSubmitUpdate} >
			Add Item to Wishlist
			</div>
		)
	}
}

export default WishlistButton;