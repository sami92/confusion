import { Component } from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap'
import Menu from './components/MenuComponent'


// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }
class App extends Component{
  render(){
    return (
          <div className="App">
           <Navbar dark color='primary'>
             <div className='container'>
               <NavbarBrand href="/">Restornate confusion</NavbarBrand>
             </div>
           </Navbar>
           <Menu />
          </div>
        );
  }
}

export default App;
