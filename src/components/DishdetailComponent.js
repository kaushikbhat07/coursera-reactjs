import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderDish({ dishdetail }) {
    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Card>
                <CardImg top src={baseUrl + dishdetail.image} alt={dishdetail.name} />
                <CardBody>
                    <CardTitle>{dishdetail.name}</CardTitle>
                    <CardText>{dishdetail.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
}
function RenderComments({ comments, postComment, dishId }) {
    return (
        <Card>
            <CardBody>
                <CardText>
                    <ul className="comment-list">
                        <Stagger in>
                            {
                                comments.map((sub) => {
                                    return (
                                        <Fade in>
                                            <li key={sub.id}>
                                                <p>{sub.comment}</p>
                                                <p>-- {sub.author}, {displayDate(sub.date)}</p>
                                            </li>
                                        </Fade>
                                    );
                                })
                            }
                        </Stagger>
                    </ul>
                </CardText>
                <CommentForm dishId={dishId} postComment={postComment} />
            </CardBody>
        </Card>
    );
}

function displayDate(date) {
    var d = new Date(date);
    return (d.toLocaleString('default', { month: 'long' }) + " " + d.getDate() + ", " + d.getFullYear());
}
const DishDetail = (props) => {

    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
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
                        <RenderComments comments={props.comments}
                            postComment={props.postComment}
                            dishId={props.dish.id} />
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