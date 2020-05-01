import React from 'react';
import Body from './Body';
import Sidebar2 from './Sidebar2';

			//

const Content = ({filteredItems}) => {
	return (
		<div>
			<Body filteredItems={filteredItems}/>
			<Sidebar2/>
		</div>
	)
}

export default Content;