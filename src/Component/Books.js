import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap'
import "../App.css"



class Books extends Component{
    render(){
        return(
            <div className='bookContainer'>
                <div className="text">
            {this.props.books.map(book =>
                    <div className='cards'>
                            <Card key={book.id} value={book.id} body inverse color="white">
                                <CardTitle>{book.title}</CardTitle>
                                <CardTitle>{book.author}</CardTitle>
                                <CardTitle>${book.price}</CardTitle>
                                <CardText>{book.description}</CardText>
                                <Button onClick={() => this.props(book.id)}>Add To Cart</Button>
                            </Card>
                        </div>
                        )}
                    </div>

                
         </div>
        )
    }
}

export default Books;