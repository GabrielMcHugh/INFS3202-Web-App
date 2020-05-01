import React from 'react';
import Card from './Card';

const CardList = ({filteredItems}) => {
	console.log('items', filteredItems)
	return (
		<div>
			{
				filteredItems.map((user, i) => {
					return ( 
						<Card 
							key={i} 
							name={filteredItems[i].name} 
							price={filteredItems[i].price}/>
					);
				})
			}
		</div>
	)
}

export default CardList;