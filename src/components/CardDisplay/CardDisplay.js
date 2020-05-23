import React from 'react';
import StarRating from '../StarRating/StarRating';

const CardDisplay = ({selectedItem}) => {

	const { name, price, type, rating, id, numratings } = selectedItem

	return (
		<div className="pb7 ba bw1 b--near-white bg-white br4">
			<div className="flex">
				<img src="https://i.pcmag.com/imagery/reviews/03lo9RsLzRw3txoeExNaEHW-38..v_1574731241.jpg" alt="Girl in a jacket"/>
				<div className="f6 narrow">
					<h1 className="f1 tracked-tight mt0">{name}</h1>
					<p>[Type here]</p>
					<h1 className="f1 tracked-tight mt0">${price}</h1>
					<StarRating initialvalue={rating/2} id={id} numratings={numratings}/>
					{ !rating ?	<p>Did you like this product?</p>
						: <p>Users rated this: {rating/2}</p>
					}
				</div>
			</div>
			<p>[User Reviews here]</p>
		</div>
	)
}

export default CardDisplay;