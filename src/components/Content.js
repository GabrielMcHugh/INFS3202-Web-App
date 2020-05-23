import React from 'react';
import Body from './Body';
import Sidebar2 from './Sidebar2';

const Content = ({filteredItems, onFilterChange, onRouteChange, loadCard}) => {
	return (
		<div className="pb7">
			<Sidebar2 onFilterChange={onFilterChange}/>
			<Body 
				filteredItems={filteredItems} 
				onRouteChange={onRouteChange}
				loadCard={loadCard}/>
		</div>
	)
}

export default Content;