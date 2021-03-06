import React from 'react';

const linkStyle = "link dim white b f6 f5-ns dib mr3 pointer";

const TopBar = ({onRouteChange, isSignedIn}) => {
	return (
		<div className="pa3">
				<p onClick={() => onRouteChange('home')} className={linkStyle} title="About">Home</p>
			    <p onClick={() => onRouteChange('signin')} className={linkStyle} title="About">Sign in</p>
			    <p onClick={() => onRouteChange('register')} className={linkStyle} title="About">Register</p>
			    { isSignedIn && 
				    <p onClick={() => onRouteChange('profilesettings')} className={linkStyle} title="About">Profile Settings</p>
			    }
			    { isSignedIn && 
				    <p onClick={() => onRouteChange('upload')} className={linkStyle} title="About">Sell Something</p>
			    }
			    
		</div>
	)
}

export default TopBar;