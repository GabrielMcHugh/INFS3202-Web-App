import React from 'react';

class CommentBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: '',
		}
	}

	onCommentChange = (event) => {
		this.setState({comment: event.target.value})
	}

	onSubmitUpdate = () => {
		this.setState({comment: ''})
		fetch('https://salty-mountain-94369.herokuapp.com/review', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				id: this.props.userID,
				item_id: this.props.itemID,
				comment: this.state.comment,
			})
		})
		.then(response => response.json())
		.catch(err => console.log(err));
	}

	render() {
		return (
		<fieldset className="pa4 black-80">
		  <div>
		    <label 
		   		htmlFor="comment" 
		    	className="f6 b db mb2">Leave a review about the item
		    	<span className="normal black-60">(optional)
		    	</span>
		    </label>
		    <textarea 
			    id="comment" 
			    name="comment" 
			    className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" 
			    aria-describedby="comment-desc"
			    value={this.state.comment} 
          		placeholder="Text" 
			    onChange={this.onCommentChange}>
		    </textarea>
		    <input
	      	  onClick={this.onSubmitUpdate}
		      className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib" 
		      type="submit" 
		      value="Submit Review"/>
		  </div>
		</fieldset>
	)}
	
}

export default CommentBox;
/*
What to do next:
1. have the comment box submit a comment to the server
2. The server loads the comment into the database
3. Front end loads reviews of the person the items belong to
*/
// return (
// 		<form className="pa4 black-80">
// 		  <div>
// 		    <label className="f6 b db mb2">Leave A Review<span className="normal black-60">(optional)</span></label>
// 		    <textarea id="comment" name="comment" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
// 		  </div>
// 		</form>
// 	)