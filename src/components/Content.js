import React from 'react';
import Body from './Body';
import Sidebar from './Sidebar';

			//

const Content = ({filteredItems}) => {
	return (
		<div>
			<Body filteredItems={filteredItems}/>
			<Sidebar/>
		</div>
	)
}

export default Content;