import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishdetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderComments(comments) {
        const commentsList = comments.map((item) => {
            return (
                <li key={item.id}>
                    {item.comment}
                    <br /><br />
                        -- {item.author}, {item.date}
                    <br /><br />
                </li>
            )
        })

        if (comments != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentsList}
                    </ul>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }



    render() {
        if (this.props.dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default DishdetailComponent; 











