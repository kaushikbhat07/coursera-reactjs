import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-4 mt-5">
                    <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardImgOverlay>{dish.name}</CardImgOverlay>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}
export default Menu;