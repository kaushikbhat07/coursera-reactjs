import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Contact from './ContactComponent';
import About from './AboutComponent';

const mapStateToProps = state => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders
	}
}	

class Main extends Component {

	constructor(props) {
		super(props);
	}

	onDishSelect(dishId) {
		this.setState({ selectedDish: dishId });
	}

	render() {	
		const HomePage = () => {
			return (
				<Home
					dish={this.props.dishes.filter((dish) => dish.featured)[0]}
					promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
					leader={this.props.leaders.filter((leader) => leader.featured)[0]}
				/>
			);
		};
		const DishWithId = ({ match }) => {
			return (
				<DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
					comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
			);
		};
		const AboutUs = () => {
			return (
				<About leaders={this.props.leaders} />
			);
		}
		return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
					<Route path='/menu/:dishId' component={DishWithId} />
					<Route exact path='/contactus' component={Contact} />
					<Route exact path='/about' component={AboutUs} />} />
					<Redirect to="/home" />
				</Switch>
				{/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
				{/* <DishDetail detail={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps)(Main));