import React from 'react';
import Searchbox from './Searchbox';
import './Header.css'

function Header() {
	//const link = 'https://tachyons.io/components/nav/large-title-link-list/index.html#'
	return (
			<nav className="flex justify-around pa3 pa4-ns" style={{backgroundColor: 'rgb(255,255,255,0.5)'}}>
			  <a className="link dim black b f1 mr3 mb3 mb4-ns" href='https://tachyons.io/components/nav/large-title-link-list/index.html#' title="Home">Shutterspace</a>
			  <Searchbox/>
			</nav>
	);
}

export default Header;