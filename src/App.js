import  React, { Component } from 'react'
import {Navbar,NavbarBrand} from 'reactstrap'
import Menu from './component/menu';
import {DISHES} from './shared/dish'


class App extends Component{
  constructor(props){
    super(props)
    this.state={
    dish:DISHES}
  }

  render(){
    return (
      <div className="App">
        <Navbar dark color="primary" >
<NavbarBrand >Dishes Practice Of Coursera waly chach</NavbarBrand>

        </Navbar>
        <Menu dish={this.state.dish}/>
      </div>
    )
  }
}
export default App