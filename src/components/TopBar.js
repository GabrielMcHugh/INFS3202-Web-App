import React from 'react';

const linkStyle = "link dim white b f6 f5-ns dib mr3 pointer";

const TopBar = ({onRouteChange}) => {
	return (
		<div className="pa3">
			    <p onClick={() => onRouteChange('signin')} className={linkStyle} title="About">Sign in</p>
			    <p onClick={() => onRouteChange('register')} className={linkStyle} title="About">Register</p>
		</div>
	)
}

export default TopBar;