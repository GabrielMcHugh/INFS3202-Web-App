import React from 'react';

class Settings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			id : ''
		}
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	//What Im trying to do: pass id from the App state into this Post request
	//1. Have to make the sign in save user data to state through the load(user) funciton copied from S-B
	//2. Then pass the user id from state into the settings component
	//3. Have the SubmitUpdate also send the id
	//4. Take the response and load it to the App state

	onSubmitUpdate = () => {
		console.log(this.state.id)
		fetch('https://salty-mountain-94369.herokuapp.com/update', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				id: this.props.userID,
				email: this.state.email,
			})
		})
			.then(response => response.json())
			.then(user => {
				if (user.id) {
					this.props.loadUser(user)
					this.props.onRouteChange('home');
				}
			})
			.catch(err => console.log(err));
	}

	render() {

		return (
			<main className="bg-white pa4 black-80">
			  <div className="measure ml5">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Update Profile</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Update Email</label>
			        <input 
			        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="email" 
			        name="email-address"  
			        id="email-address"
			        onChange={this.onEmailChange}
			        />
			      </div>
			    </fieldset>
			    <div className="">
			      <input
				      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      type="submit" 
				      value="Register"
				      onClick={this.onSubmitUpdate}
				      />
			    </div>
			  </div>
			</main>
		);
	}
	
}

export default Settings;