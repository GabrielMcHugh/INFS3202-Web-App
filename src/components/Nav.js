import React from 'react';

const link = 'https://tachyons.io/components/nav/large-title-link-list/index.html#'
const linkStyle ='link dim white f6 f5-ns dib mr3'

function Nav() {
	return (
		<div className="tc pa3">
		    <a className={linkStyle} href={link} title="Home">Cameras</a>
		    <a className={linkStyle} href={link} title="About">Tripods</a>
		    <a className={linkStyle} href={link} title="Store">Lights</a>
		    <a className={linkStyle} href={link} title="Contact">Stands</a>
		</div>
	)
}

export default Nav;