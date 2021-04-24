import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
    return (
        <div key={dish.id} className='col-12 col-md-5 m-1'>
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if (comments != null) {
        const listedComments = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author},{new Intl.DateTimeFormat('en-Us', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </div>
            );
        });

        return (
            <div className='col-12 col-md-5 m-1'>
                <h1>Comments</h1>
                <div className="list-unstyled">
                    {listedComments}
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


const DishDetails = (props) => {
    const dish = props.dish
    if (dish != null) {
        return (
            <div className='container'>
                <div className='row'>
                    <RenderDish dish={dish} />
                    <RenderComments comments={dish.comments} />                    
                </div>
            </div>
        );
    }
    else {
        return (
            <div> </div>
        );
    }
}

export default DishDetails;