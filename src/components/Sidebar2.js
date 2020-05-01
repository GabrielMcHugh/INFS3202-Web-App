import React from 'react';

function Sidebar2() {
	return (
		<div>
			<div className="pa4" style ={{ backgroundColor: 'rgb(255,255,255,0.5)', position : 'absolute', width : '25%'}}>
			  <fieldset id="favorite_movies" className="bn mv2 b">
			    <legend className="fw7 mb2 gray">[Implementing] Price</legend>
			    <div className="flex items-center mb2">
			      <input className="mr2" type="checkbox" id="spacejam" value="spacejam"/>
			      <label htmlFor="spacejam" className="lh-copy">&lt;$5</label>
			    </div>
			    <div className="flex items-center mb2">
			      <input className="mr2" type="checkbox" id="airbud" value="airbud"/>
			      <label htmlFor="airbud" className="lh-copy">&lt;$10</label>
			    </div>
			    <div className="flex items-center mb2">
			      <input className="mr2" type="checkbox" id="hocuspocus" value="hocuspocus"/>
			      <label htmlFor="hocuspocus" className="lh-copy">&lt;$15</label>
			    </div>
			    <div className="flex items-center mb2">
			      <input className="mr2" type="checkbox" id="diehard" value="diehard"/>
			      <label htmlFor="diehard" className="lh-copy">&lt;$25</label>
			    </div>
			    <div className="flex items-center mb2">
			      <input className="mr2" type="checkbox" id="primer" value="primer"/>
			      <label htmlFor="primer" className="lh-copy">&lt;$50</label>
			    </div>
			    <div className="flex items-center mb2">
			      <input className="mr2" type="checkbox" id="proxy" value="proxy"/>
			      <label htmlFor="proxy" className="lh-copy">&lt;$75</label>
			    </div>
			    <div className="flex items-center mb2">
			      <input className="mr2" type="checkbox" id="homealone" value="homealone"/>
			      <label htmlFor="homealone" className="lh-copy">&gt;100</label>
			    </div>
			  </fieldset>
			</div>
		</div>
	)
}

export default Sidebar2;