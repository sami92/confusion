import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent'
import DishDetails from './DishDetailsComponent'
import { DISHES } from '../shared/dishes'

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId })
    }
    render() {
        return (
            <div className="App">
                <Navbar dark color='primary'>
                    <div className='container'>
                        <NavbarBrand href="/">Restornate confusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetails
                    dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>
        );
    }
}

export default Main;
