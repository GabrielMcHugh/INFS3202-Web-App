import React from 'react';

function Sidebar() {
	return (
		<div>
			<div style ={{ position : 'fixed', background : '#d0e3fa', width : '25%' }}>
			  <h3 className="f6 f5-ns mr3">Menu</h3>
			  <a className="link dim gray f6 f5-ns db mr3" href='https://tachyons.io/components/nav/large-title-link-list/index.html#' title="Home">Link</a>
			    <a className="link dim gray f6 f5-ns db mr3" href='https://tachyons.io/components/nav/large-title-link-list/index.html#' title="About">Link</a>
			    <a className="link dim gray f6 f5-ns db mr3" href='https://tachyons.io/components/nav/large-title-link-list/index.html#' title="Store">Link</a>
			    <a className="link dim gray f6 f5-ns db" href='https://tachyons.io/components/nav/large-title-link-list/index.html#' title="Contact">Link</a>
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