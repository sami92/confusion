import { Component } from 'react'

import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
class DishDetails extends Component {
    constructor(props) {
        super(props)
        console.log(" DishDetails constructor")
    }
    renderComments(comments) {
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
                <div className="list-unstyled">
                    { listedComments}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
    render() {
        const dish = this.props.dish
        console.log(dish)
        if (dish != null) {

            return (
                <div className='container'>
                    <div className='row'>
                        <div key={dish.id} className='col-12 col-md-5 m-1'>
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className='col-12 col-md-5 m-1'>
                            <h1>Comments</h1>
                            {this.renderComments(dish.comments)}
                        </div>
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
}
export default DishDetails;