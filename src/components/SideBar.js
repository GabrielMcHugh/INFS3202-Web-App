import React from 'react';
import Carousel from './Carousel';

const link = 'https://tachyons.io/components/nav/large-title-link-list/index.html#'
const linkStyle = 'link dim gray ma2 f6 f5-ns db mr3'

function Sidebar() {
	return (
		<div>
			<div className="pl3" style ={{ backgroundColor: 'rgb(255,255,255,0.5)', position : 'absolute', width : '25%'}}>
			  <h3 className="f6 f5-ns mr3">Menu</h3>
			  <a className={linkStyle} href={link} title="Home">Link</a>
			    <a className={linkStyle} href={link} title="About">Link</a>
			    <a className={linkStyle} href={link} title="Store">Link</a>
			    <a className={linkStyle} href={link} title="Contact">Link</a>
			</div>

			<div style = {{ backgroundColor: 'rgb(255,255,255,0.5)', marginLeft : '25%' }}>

				<div>
				  <h1 style = {{margin : 0}}>Digital Cameras</h1>
				</div>
				<div>
					<p>Setting up the layout</p>
					<p>Let us test the carousel</p>
					<Carousel/>
					<Carousel/>
					<Carousel/>
				</div>
			</div>
		</div>
	)
}

export default Sidebar;