import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body';

			//

const Content = ({filteredItems}) => {

	console.log('content items', filteredItems);
	
	return (
		<div>
			<Sidebar/>
			<Body filteredItems={filteredItems}/>
		</div>
	)
}

export default Content;