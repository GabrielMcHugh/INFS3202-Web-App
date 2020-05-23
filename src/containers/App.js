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
import CardDisplay from '../components/CardDisplay/CardDisplay';
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
			pricefilter: 'all',
			selectedItem: {
				name: '',
				price: '',
				type: '',
				rating: '',
				id: '',
				numratings: '',
			},
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
		fetch('https://salty-mountain-94369.herokuapp.com/items')
		.then(response=> response.json())
		.then(users => this.setState({ items: users}))
	}


	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	onFilterChange = (price) => {
		this.setState({ pricefilter: price})
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

	loadCard = (name, price, type, rating, id, numratings) => {
		this.setState({ selectedItem : {
			name: name,
			price: price,
			type: type,
			rating: rating,
			id: id,
			numratings: numratings,
		}})
	}

	onRouteChange = (route) => {
		this.setState({route : route });
	}

	onSignIn = (bool) => {
		this.setState({isSignedIn : true});
	}

	filterItems = (items) => {
		const { searchfield, pricefilter } = this.state;	
		if (pricefilter === 'all') {
			return items.name.toLowerCase().includes(searchfield.toLowerCase());
		}	
		return (items.name.toLowerCase().includes(searchfield.toLowerCase()) && items.price <= pricefilter);
	}
	// MAde this function to filter the items. Not sure how to combine it with the searchfield filter
	//I've passed this function down to Content. Must pass it from there down to Sidebar. Then have to have it update teh prifceilfter state.
  
	render() {
	  	const { route, items, selectedItem } = this.state;

		const filteredItems = items.filter(this.filterItems);

	  return (
	  	<div className='App'>
	  		<TopBar onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
	  		{ route === 'home' 
	  		? <div>
		  		<Header onSearchChange={this.onSearchChange} onRouteChange={this.onRouteChange}/>
		  		<Nav/>
		  		<Content 
		  			filteredItems={filteredItems} 
		  			onFilterChange={this.onFilterChange} 
		  			onRouteChange={this.onRouteChange}
		  			loadCard={this.loadCard}/>
		  	  </div> 
		  	: ( route === 'card'
		  		? <div>
			  		<Header onSearchChange={this.onSearchChange} onRouteChange={this.onRouteChange}/>
			  		<Nav/>
			  		<CardDisplay selectedItem={selectedItem}/>
		  	  	</div> 
		  		: ( route === 'signin'
		  		    ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} onSignIn={this.onSignIn}/>
		  		    : ( route === 'register'
		  		    	? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
		  		    	:   ( route === 'profilesettings'
		  		    		? <Settings loadUser={this.loadUser} userID={this.state.user.id} onRouteChange={this.onRouteChange}/>
		  		    		: <FileUpload userID={this.state.user.id} onRouteChange={this.onRouteChange}/>
		  		    	)
		  		  	)
		  		  )
		  		)	  		    
	  		}
	  	</div>
	  );
	}
}


export default App;
