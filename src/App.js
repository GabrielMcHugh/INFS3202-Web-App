import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';

function App() {
  return (
  	<div>
  		<TopBar/>
  		<Header/>
  		<Nav/>
  		<SideBar/>
  	</div>
  );
}

export default App;
