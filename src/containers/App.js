import React from 'react';
import './App.css';
import Header from '../components/Header';
import Nav from '../components/Nav';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';


function App() {
  return (
  	<div className='container'>
  		<TopBar/>
  		<Header/>
  		<Nav/>
  		<SideBar/>
  	</div>
  );
}

export default App;
