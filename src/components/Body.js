import React from 'react';
import CardList from './CardList';

const Body = ({ filteredItems, onRouteChange, loadCard }) => {

	return !filteredItems.length  ?
		<h1 className="pb7 white ba bw1 b--near-white br4" style={{ marginLeft: '25%'}}>Loading</h1> :
	(
		<div className="pb7 ba bw1 b--near-white br4" style={{ marginLeft: '25%'}}>
			<CardList 
				filteredItems={filteredItems} 
				onRouteChange={onRouteChange}
				loadCard={loadCard} />
		</div>
	)
}

export default Body;