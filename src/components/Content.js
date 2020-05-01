import React from 'react';
import Body from './Body';

			//

const Content = ({filteredItems}) => {
	return (
		<div>
			<Body filteredItems={filteredItems}/>
		</div>
	)
}

export default Content;