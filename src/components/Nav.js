import React from 'react';

const link = 'https://tachyons.io/components/nav/large-title-link-list/index.html#'

function Nav() {
	return (
		<div className="tc pa3" style={{backgroundColor : '#73B55B'}}>
		    <a className="link dim gray f6 f5-ns dib mr3" href={link} title="Home">Cameras</a>
		    <a className="link dim gray f6 f5-ns dib mr3" href={link} title="About">Tripods</a>
		    <a className="link dim gray f6 f5-ns dib mr3" href={link} title="Store">Lights</a>
		    <a className="link dim gray f6 f5-ns dib" href={link} title="Contact">Stands</a>
		</div>
	)
}

export default Nav;