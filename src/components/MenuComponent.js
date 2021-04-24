import { Component } from 'react';
import DishDetails from './DishDetailsComponent'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
        console.log("Menu Component constructor invoked ")
    }

    componentDidMount() {
        console.log("Menu Component componentDidMount invoked ")
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
        console.log(this.state.selectedDish);
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle heading >{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log("Menu component render invoked ");
        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                <DishDetails dish={this.state.selectedDish} />
            </div>
        );
    }
}
export default Menu;
