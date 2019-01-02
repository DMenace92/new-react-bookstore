import React, { Component } from 'react';
import {Card, CardTitle, CardText} from 'reactstrap'


class CartItems extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
            <Card>
                    <CardTitle>{this.props.newBook.title}</CardTitle>
                    <CardTitle>{this.props.newBook.author}</CardTitle>
                    <CardTitle>${this.props.newBook.price}</CardTitle>
                    <CardText>{this.props.newBook.description}</CardText>
                </Card>
            </div>
        )
    }
} 
export default CartItems;