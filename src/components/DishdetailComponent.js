import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent' ;

function RenderDish({ dishdetail }) {
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
function RenderComments({ com }) {
    return (
        <Card>
            <CardBody>
                <CardText>
                    <ul className="comment-list">
                        {
                            com.map((sub) => {
                                return (
                                    <li key={sub.id}>
                                        <p>{sub.comment}</p>
                                        <p> -- {sub.author}, {displayDate(sub.date)}</p>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </CardText>
                <CommentForm/>
            </CardBody>
        </Card>
    );
}

function displayDate(date) {
    var d = new Date(date);
    return (d.toLocaleString('default', { month: 'long' }) + " " + d.getDate() + ", " + d.getFullYear());
}
const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dishdetail={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments com={props.comments} />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;