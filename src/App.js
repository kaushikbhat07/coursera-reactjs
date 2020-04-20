import React, { Component } from 'react';
import Main from './components/MainComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {

	render() {
	  return (
		<div className="App">
		  <Main />
		</div>
	  );
	}
  }

export default App;
