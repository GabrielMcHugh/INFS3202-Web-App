import React from 'react';

const Card = ({name, price, picture}) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='camera' src={picture} width="150" />
			<div>
				<p>{name}</p>
				<h1>{price}</h1>
			</div>
		</div>
	);
}

export default Card;