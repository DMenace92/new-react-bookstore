import React, { Component } from 'react';
import {Card, CardTitle, CardText} from 'reactstrap'


class CartItems extends Component{
    render(){
        return(
            <div>
            <Card>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardTitle>{this.props.author}</CardTitle>
                    <CardTitle>${this.props.price}</CardTitle>
                    <CardText>{this.props.description}</CardText>
                </Card>
            </div>
        )
    }
} 
export default CartItems;