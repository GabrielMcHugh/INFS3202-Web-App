import React from 'react';

function Searchbox({onSearchChange}) {
	return (
		<div className='pa2'>
			<input
			className='pa3 ba b--white bg-lightest-blue'
			style ={{ backgroundColor: 'rgb(255,255,255,0.3)'}}
			type='search'
			placeholder='search auction'
			onChange={onSearchChange}
		/>
		</div>
	)
}

export default Searchbox;