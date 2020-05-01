import React from 'react';
import CardList from './CardList';

const Body = ({ filteredItems }) => {

	return (
		<div className="pb7 ba bw1 b--near-white br4" style={{ marginLeft: '25%'}}>
			<CardList filteredItems={filteredItems}/>
		</div>
	)
}

export default Body;