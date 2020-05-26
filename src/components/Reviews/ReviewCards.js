import React from 'react';

const ReviewCards = ({review}) => {
	return (
		<div className='ba b--black bg-light-gray br3 pa3 ma2'>
			<div>
				<p>{review}</p>
			</div>
		</div>
	)
}

export default ReviewCards;