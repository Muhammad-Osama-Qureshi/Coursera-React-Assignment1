import React, { Component } from 'react'

import { Media,Card,CardBody,CardImgOverlay,CardImg,CardTitle,CardText } from 'reactstrap';


class Menu extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedDish:null
            }

    }
    onDishSelect(dish){
        this.setState({selectedDish:dish})
    }
   renderDish(dish){
       if(dish!=null){
           return (
               <Card>
                   <CardImg width="50%" src={dish.image} alt={dish.name}/>
                   <CardBody>
                       <CardTitle>{dish.name}</CardTitle>
                       <CardText>{dish.description}</CardText>
                   </CardBody>
               </Card>
           )
       }
   }


    render(){
        const menu=this.props.dish.map(dish=>{
return(
    <div key={dish.id} className="col-12 col-md-5 m-1">
      <Card onClick={()=>this.onDishSelect(dish)}>
          
        <CardImg width="100%" src={dish.image} alt={dish.name}/>
   
        <CardImgOverlay body className="ml-5">
            <CardTitle>{dish.name}</CardTitle>
            
        </CardImgOverlay>

         
    </Card>
    </div>
)
        })
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
    {this.renderDish(this.state.selectedDish)}
</div>

            </div>
        )
    }
}

export default Menu