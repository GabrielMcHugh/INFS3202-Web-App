import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Nav from '../components/Nav';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import Signin from '../components/Signin';
import Register from '../components/Register';
import Settings from '../components/Settings/Settings';
//import camera2 from '../images/camera2.jpeg';


class App extends Component {
	constructor() {
		super();
		this.state = {
			route: 'profile',
			isSignedIn: false,
			user: {
				email: '',
				id: '',
				name: '',
				entries: 0,
				joined: '',
			}
		}
	}

	loadUser = (data) => {
		this.setState({user: {
			email: data.email,
			id: data.id,
			name: data.name,
			entries: data.entries,
			joined: data.joined,
		}})
	}

	onRouteChange = (route) => {
		this.setState({route : route });
	}

	onSignIn = (bool) => {
		this.setState({isSignedIn : true});
	}
  
	render() {
	  const state = this.state.route;
	  return (
	  	<div className='App'>
	  		<TopBar onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} userID ={this.state.user.id}/>
	  		{ state === 'home' 
	  		? <div>
		  		<Header/>
		  		<Nav/>
		  		<SideBar/>
		  	  </div> 
	  		: ( state === 'signin'
	  		    ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} onSignIn={this.onSignIn}/>
	  		    : ( state === 'register'
	  		    	? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
	  		    	: <Settings/>
	  		  	)
	  		  )	  		    
	  		}
	  	</div>
	  );
	}
}


export default App;
