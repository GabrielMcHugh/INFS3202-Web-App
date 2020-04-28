import React from 'react';

const link = 'https://tachyons.io/components/nav/large-title-link-list/index.html#'
const linkStyle = "link dim gray f6 f5-ns dib mr3 pointer";

const TopBar = ({onRouteChange}) => {
	return (
		<div className="pa3 o-40 bg-light-blue">
			    <p onClick={() => onRouteChange('signin')} className={linkStyle} title="About">Sign in</p>
			    <p onClick={() => onRouteChange('register')} className={linkStyle} title="About">Register</p>
		</div>
	)
}

export default TopBar;