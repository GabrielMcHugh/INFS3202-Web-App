import React from 'react';

const link = 'https://tachyons.io/components/nav/large-title-link-list/index.html#'
const linkStyle = "link dim gray f6 f5-ns dib mr3";

function TopBar() {
	return (
		<div className="pa3" style={{backgroundColor : '#A5DA91'}}>
			    <a className={linkStyle} href={link} title="About">Sign in</a>
			    <a className={linkStyle} href={link} title="Store">Register</a>
		</div>
	)
}

export default TopBar;