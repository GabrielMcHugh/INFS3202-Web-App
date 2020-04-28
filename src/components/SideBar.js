import React from 'react';

const link = 'https://tachyons.io/components/nav/large-title-link-list/index.html#'
const linkStyle = 'link dim gray f6 f5-ns db mr3'

function Sidebar() {
	return (
		<div>
			<div className="pl3" style ={{ position : 'fixed', background : '#d0e3fa', width : '25%'}}>
			  <h3 className="f6 f5-ns mr3">Menu</h3>
			  <a className={linkStyle} href={link} title="Home">Link</a>
			    <a className={linkStyle} href={link} title="About">Link</a>
			    <a className={linkStyle} href={link} title="Store">Link</a>
			    <a className={linkStyle} href={link} title="Contact">Link</a>
			</div>

			<div style = {{ background : '#faeeb6', marginLeft : '25%' }}>

				<div>
				  <h1 style = {{margin : 0}}>My Page</h1>
				</div>
				<div>
					<h2>Sidebar Navigation Example</h2>
					<p>The sidebar with is set with "style="width:25%".</p>
					<p>The left margin of the page content is set to the same value.</p>
				</div>
			</div>
		</div>
	)
}

export default Sidebar;