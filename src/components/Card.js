import React from 'react';

const Card = ({name, price}) => {
	return (
		<div className='bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div>
				<p>{name}</p>
				<h1>${price}</h1>
			</div>
		</div>
	);
}

export default Card;