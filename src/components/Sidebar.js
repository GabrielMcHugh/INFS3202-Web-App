import React from 'react';

function Sidebar() {
	return (
		<div className="pa4" style ={{ backgroundColor: 'rgb(255,255,255,0.5)', position : 'absolute', width : '25%'}}>
	    	Under: <br/>
	    	<form>
			  <div className="form-check">
			    <label>
			      <input
			        type="radio"
			        name="money-filter"
			        value="option1"
			        checked={false}
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
			        value="option2"
			        checked={this.state.selectedOption === "option2"}
			        onChange={this.handleOptionChange}
			        className="form-check-input"
			      />
			      $10
			    </label>
			  </div>

			  <div className="form-check">
			    <label>
			      <input
			        type="radio"
			        name="money-filter"
			        value="option3"
			        checked={this.state.selectedOption === "option3"}
			        onChange={this.handleOptionChange}
			        className="form-check-input"
			      />
			      $25
			    </label>
			  </div>

			  <div className="form-group">
			    <button className="btn btn-primary mt-2" type="submit">
			      Save
			    </button>
			  </div>
			</form>
		</div>
	)
}

export default Sidebar;