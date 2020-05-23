
// function Sidebar2() {
// 	return (
// 		<div>
// 			<div className="pa4" style ={{ backgroundColor: 'rgb(255,255,255,0.5)', position : 'absolute', width : '25%'}}>
// 			  <fieldset id="favorite_movies" className="bn mv2 b">
// 			    <legend className="fw7 mb2 gray">[Implementing] Price</legend>
// 			    <div className="flex items-center mb2">
// 			      <input className="mr2" type="checkbox" id="spacejam" value="spacejam"/>
// 			      <label htmlFor="spacejam" className="lh-copy">&lt;$5</label>
// 			    </div>
// 			    <div className="flex items-center mb2">
// 			      <input className="mr2" type="checkbox" id="airbud" value="airbud"/>
// 			      <label htmlFor="airbud" className="lh-copy">&lt;$10</label>
// 			    </div>
// 			  </fieldset>
// 			</div>
// 		</div>
// 	)
// }


import React, { Component } from "react";

class Sidebar2 extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
      		selectedOption: '',
    	};
  	}

  	handleOptionChange = (event) => {
  		this.setState({
    		selectedOption: event.target.value
  		});
  		this.props.onFilterChange(event.target.value);
	};



	  render() {
	    return (
	    	<div className="pa4" style ={{ backgroundColor: 'rgb(255,255,255,0.5)', position : 'absolute', width : '25%'}}>
	    	Under: <br/>
	    	<form>
			  <div className="form-check">
			    <label>
			      <input
			        type="radio"
			        name="money-filter"
			        value="5"
			        checked={this.state.selectedOption === "5"}
			        onChange={this.handleOptionChange}
			        className="form-check-input"
			      />
			      $5
			    </label>
			  </div>

			  <div className="form-check">
			    <label>
			      <input
			        type="radio"
			        name="money-filter"
			        value="200"
			        checked={this.state.selectedOption === "200"}
			        onChange={this.handleOptionChange}
			        className="form-check-input"
			      />
			      $200
			    </label>
			  </div>

			  <div className="form-check">
			    <label>
			      <input
			        type="radio"
			        name="money-filter"
			        value="1000"
			        checked={this.state.selectedOption === "1000"}
			        onChange={this.handleOptionChange}
			        className="form-check-input"
			      />
			      $1000
			    </label>
			  </div>
			</form>
			</div>
		);
	  }
}

export default Sidebar2;