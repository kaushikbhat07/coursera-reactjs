import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: null
        }
    }

    renderDish(dishdetail) {
        return (
            <Card>
                <CardImg top src={dishdetail.image} alt={dishdetail.name} />
                <CardBody>
                    <CardTitle>{dishdetail.name}</CardTitle>
                    <CardText>{dishdetail.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    renderComments(com) {
        return (
            <Card>
                <CardBody>
                    <CardText>
                        <ul className="comment-list">
                            {
                                com.comments.map((sub) => {
                                    return (
                                        <li key={sub.id}>
                                            <p>{sub.comment}</p>
                                            <p> -- {sub.author}, {this.displayDate(sub.date)}</p>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </CardText>
                </CardBody>
            </Card>
        );
    }

    displayDate(date) {
        var d = new Date(date);
        return (d.toLocaleString('default', { month: 'long' }) + " " + d.getDate() + ", " + d.getFullYear());
    }
    render() {
        if (this.props.detail != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 mt-5">
                        {this.renderDish(this.props.detail)}
                    </div>
                    <div className="col-12 col-md-5 mt-5">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.detail)}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div >
            );
        }
    }
}
export default DishDetail;