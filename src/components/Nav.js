import React from 'react';

const linkStyle ='link dim white f6 f5-ns dib mr3 pointer'

const Nav = ({onRouteChange}) => {
	return (
		<div className="tc pa3">
		    <p className={linkStyle} onClick={event => onRouteChange('Cameras')} title="Home">Cameras</p>
		    <p className={linkStyle} onClick={event => onRouteChange('Tripods')} title="Home">Tripods</p>
		    <p className={linkStyle} onClick={event => onRouteChange('Lights')} title="Home">Lights</p>
		    <p className={linkStyle} onClick={event => onRouteChange('Stands')} title="Home">Stands</p>
		    <p className="link dim white f6 f5-ns dib mr3 pointer b f1" onClick={event => onRouteChange('WishList')} title="Home">| WishList</p>
		</div>
	)
}

export default Nav;