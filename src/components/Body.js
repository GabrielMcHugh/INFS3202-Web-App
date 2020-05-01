import React from 'react';
import CardList from './CardList';

const Body = ({ filteredItems }) => {

	return !filteredItems.length  ?
		<h1 className="pb7 white ba bw1 b--near-white br4" style={{ marginLeft: '25%'}}>Loading</h1> :
	(
		<div className="pb7 ba bw1 b--near-white br4" style={{ marginLeft: '25%'}}>
			<CardList filteredItems={filteredItems}/>
		</div>
	)
}

export default Body;