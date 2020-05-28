import React from 'react';
import ReviewCards from './ReviewCards';

const ReviewList = ({reviews}) => {
	return (
		<div>
			{
				reviews.map((user, i) => {
					return ( 
						<ReviewCards
							key={i}
							review={reviews[i].review}/>
					);
				})
			}
		</div>
	)
}

export default ReviewList;