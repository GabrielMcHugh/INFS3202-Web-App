import React from 'react';
import StarRating from '../StarRating/StarRating';
import CommentBox from '../CommentBox/CommentBox';
import Reviews from '../Reviews/Reviews';
import WishlistButton from '../WishlistButton/WishlistButton';

const CardDisplay = ({selectedItem, userID, AUD, JPY}) => {


	const { name, price, type, rating, id, numratings } = selectedItem

	return (
		<div className=" ma3 pb7 ba bw1 b--near-white bg-white br4">
			<div className="flex">
				<img 
				src="https://i.pcmag.com/imagery/reviews/03lo9RsLzRw3txoeExNaEHW-38..v_1574731241.jpg" 
				alt="Girl in a jacket"
				className="ma2 ba bw1 b--silver"/>
				<div className="f6 narrow">
					<h1 className="f1 tracked-tight mt0">{name}</h1>
					<p>Type: {type}</p>
					<h1 className="f1 tracked-tight mt0">${price}</h1>
					<h1>AUD Exchange Rate: <b>${(AUD*price).toFixed(2)}</b>, JPY Exchange Rate: <b>¥{(JPY*price).toFixed(2)}</b>,</h1>
					<StarRating initialvalue={rating/2} id={id} numratings={numratings}/>
					{ !rating ?	<p>Did you like this product?</p>
						: <p> {numratings} Users rated this: {rating/2}</p>
					}
					{ !userID ?	<p className="f6 no-underline br-pill ba ph3 pv2 mb2 dib dark-green">Sign in to add item to wish list</p>
						: <WishlistButton userID={userID} itemID={id}/>
					}
				</div>
			</div>
			<Reviews item_id={id}/>
			{ !userID ?	<p className="ma3 fw1">Sign in to leave a review</p>
				: <CommentBox userID={userID} itemID={id}/>
			}
			
		</div>
	)
}

export default CardDisplay;