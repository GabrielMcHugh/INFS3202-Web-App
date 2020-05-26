import React from 'react';
import Card from './Card';

const CardList = ({filteredItems, onRouteChange, loadCard}) => {
	return (
		<div>
			{
				filteredItems.map((user, i) => {
					return ( 
						<Card 
							key={i}
							id={filteredItems[i].id}
							name={filteredItems[i].name} 
							price={filteredItems[i].price}
							type={filteredItems[i].type}
							rating={filteredItems[i].rating}
							numratings={filteredItems[i].numofratings}
							onRouteChange={onRouteChange}
							loadCard={loadCard}
							style={{zIndex: '1'}}/>
					);
				})
			}
		</div>
	)
}

export default CardList;