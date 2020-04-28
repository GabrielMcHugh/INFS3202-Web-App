import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Nav from '../components/Nav';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import Signin from '../components/Signin';
import Register from '../components/Register';


class App extends Component {
	constructor() {
		super();
		this.state = {
			route: 'home'
		}
	}

	onRouteChange = (route) => {
		this.setState({route : route });
	}
  
	render() {
	  return (
	  	<div className='App'>
	  		<TopBar onRouteChange={this.onRouteChange}/>
	  		{ this.state.route === 'home' 
	  		? <div>
		  		<Header/>
		  		<Nav/>
		  		<SideBar/>
		  	  </div> 
	  		: (
	  			this.state.route === 'signin'
	  		    ? <Signin onRouteChange={this.onRouteChange}/>
	  		    : <Register onRouteChange={this.onRouteChange}/>
	  		  )
	  		}
	  	</div>
	  );
	}
}

export default App;
