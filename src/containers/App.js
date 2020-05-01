import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Nav from '../components/Nav';
import TopBar from '../components/TopBar';
import Content from '../components/Content';
import Signin from '../components/Signin';
import Register from '../components/Register';
import Settings from '../components/Settings/Settings';
import FileUpload from '../components/FileUpload/FileUpload';
//import camera2 from '../images/camera2.jpeg';


/*
What I want to do: Have the web app return cards displaying the items stored in the database

How Im planning on doing that:
- Implement the Front end loading a list of Cards
	+ Copy robofriends implementation
- Have the main page request data from the back end, show loading while we wait, then displaying the cards after rtn
- Implement the back end returning the data


*/

class App extends Component {
	constructor() {
		super();
		this.state = {
			route: 'home',
			isSignedIn: false,
			items: [],
			searchfield: '',
			user: {
				email: '',
				id: '',
				name: '',
				entries: 0,
				joined: '',
			}
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({ items: users}))
	}


	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
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
	  	const { route, items, searchfield } = this.state;

		const filteredItems = items.filter(items =>{
			return items.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		console.log('frirst', filteredItems)

	  return !items.length ?
			<h1>Loading</h1> :
		(
	  	<div className='App'>
	  		<TopBar onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
	  		{ route === 'home' 
	  		? <div>
		  		<Header onSearchChange={this.onSearchChange}/>
		  		<Nav/>
		  		<Content filteredItems={filteredItems}/>
		  	  </div> 
	  		: ( route === 'signin'
	  		    ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} onSignIn={this.onSignIn}/>
	  		    : ( route === 'register'
	  		    	? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
	  		    	:   ( route === 'profilesettings'
	  		    		? <Settings loadUser={this.loadUser} userID={this.state.user.id} onRouteChange={this.onRouteChange}/>
	  		    		: <FileUpload userID={this.state.user.id}/>
	  		    	)
	  		  	)
	  		  )	  		    
	  		}
	  	</div>
	  );
	}
}


export default App;
