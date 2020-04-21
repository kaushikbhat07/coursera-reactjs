import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


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
                            com.comments.map((sub) => {
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
            </CardBody>
        </Card>
    );
}

function displayDate(date) {
    var d = new Date(date);
    return (d.toLocaleString('default', { month: 'long' }) + " " + d.getDate() + ", " + d.getFullYear());
}
const DishDetail = (props) => {
    if (props.detail != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 mt-5">
                        <RenderDish dishdetail = {props.detail} />
                    </div>
                    <div className="col-12 col-md-5 mt-5">
                        <h4>Comments</h4>
                        <RenderComments com = {props.detail}/>
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