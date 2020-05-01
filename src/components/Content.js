import React from 'react';
import Body from './Body';
import Sidebar2 from './Sidebar2';

const Content = ({filteredItems}) => {
	return (
		<div className="pb7">
			<Sidebar2/>
			<Body filteredItems={filteredItems}/>
		</div>
	)
}

export default Content;