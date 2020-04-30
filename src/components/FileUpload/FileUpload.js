import React from 'react';
import './FileUpload.css'
import axios from 'axios';

class FileUpload extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name : '',
			price : '',
			selectedFile : null
		}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}
	
	onPriceChange = (event) => {
		this.setState({price: event.target.value})
	}

	onChangeHandler=event=>{
	      var files = event.target.files
	      if(this.maxSelectFile(event)){ 
	      // if return true allow to setState
	         this.setState({
	         selectedFile: files
	      })
	   }
	}

	maxSelectFile=(event)=>{
	   	let files = event.target.files // create file object
	       	if (files.length > 3) { 
	          const msg = 'Only 3 images can be uploaded at a time'
	          event.target.value = null // discard selected file
	          console.log(msg)
	        return false;

	    }
	   	return true;
	}

	onClickHandler = () => {
	   	const data = new FormData()
	    for(var x = 0; x<this.state.selectedFile.length; x++) {
       		data.append('file', this.state.selectedFile[x])
   		}	

	   axios.post('http://localhost:3000/upload', data, { 
	      // receive two    parameter endpoint url ,form data
	  })
	  .then(res => { // then print response status
	    console.log(res.statusText)
	  })
	}

	render () {
		return (
			<div className="ma2 bg-white">
				<div class="black b tc db pa3 bg-gray">
					Provide Details About The Product You Want To Sell
				</div>

				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="itemName">Name of Item</label>
				        <input 
				        className="pa2 input-reset ba bg-transparent hover-bg-black w-100" 
				        type="itemName" 
				        name="itemName"  
				        id="itemName"
				        onChange={this.onNameChange}
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="price">Price</label>
				        <input 
				        className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" 
				        type="price" 
				        name="price"  
				        id="price"
				        onChange={this.onPriceChange}
				        />
				      </div>
				    </fieldset>
				  </div>
				</main>

				<div className="ma3 pb2 row">
				  <div className="col-md-6">
				      <form method="post" action="#" id="#">
			              <div className="form-group files">
			                <label className="b">Upload an image of your item</label>
			                <input 
			                	type="file" 
			                	name="file"
			                	multiple 
			                	className="form-control" 
			                	/>
			              </div>
			              <button 
			              type="button" 
			              className="btn btn-success btn-block"
			              onClick={this.onClickHandler}
			              >Upload</button> 
			          </form> 
				  </div>
				</div>
			</div>
		)
	}
}

export default FileUpload;