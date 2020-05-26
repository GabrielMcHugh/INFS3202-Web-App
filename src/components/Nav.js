import React from 'react';

const link = 'https://tachyons.io/components/nav/large-title-link-list/index.html#'
const linkStyle ='link dim white f6 f5-ns dib mr3 pointer'

const Nav = ({onRouteChange}) => {
	return (
		<div className="tc pa3">
		    <p className={linkStyle} onClick={event => onRouteChange('cameras')} title="Home">Cameras</p>
		    <a className={linkStyle} href={link} title="About">Tripods</a>
		    <a className={linkStyle} href={link} title="Store">Lights</a>
		    <a className={linkStyle} href={link} title="Contact">Stands</a>
		</div>
	)
}

export default Nav;