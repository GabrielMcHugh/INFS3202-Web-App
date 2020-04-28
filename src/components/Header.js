import React from 'react';
import Searchbox from './Searchbox';

function Header() {
	//const link = 'https://tachyons.io/components/nav/large-title-link-list/index.html#'
	return (
			<nav className="flex justify-around pa3 pa4-ns bg-green" style={{backgroundColor : '#4B9130'}}>
			  <a className="link dim black b f1 mr3 mb3 mb4-ns" href='https://tachyons.io/components/nav/large-title-link-list/index.html#' title="Home">Shutterspace</a>
			  <Searchbox className="ml-auto"/>
			</nav>
	);
}

export default Header;