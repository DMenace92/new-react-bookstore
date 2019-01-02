import React, { Component } from 'react';
import Navbar from './Component/Navbar.js';
import Books from './Component/Books.js';
import Search from './Component/Search.js';
import CartItems from './Component/CartItems.js'
import Cart from './Component/Cart.js';

import './App.css';

class App extends Component {
  state = {
    CartItems: [],
    books: [],
    total: 0 ,
    filteredBook: ''
  }

  async componentDidMount () {
    const res = await fetch('http://localhost:8082/api/books')
    const json = await res.json()
    this.setState({books: json})
    console.log(json)
  }

  BookSearch = (e) => {
    this.setState ({                              
      filteredBook: e.target.value
    })
  }
  addBook = (id) => {
    const singleBook = this.state.books.filter(book => book.id === id)
    console.log(singleBook)
    this.setState(prevState => {
      let addItem = this.state.CartItems
      for(let i = 0; i < this.state.books.length; i++){
        if(this.state.books[i].id === id){
          CartItems.push(this.state.books[i])
        }
      }
      return {addItem};
    })
  }
  render() {
    return (
      <div className="App">
       <Navbar />
       <Books books={this.state.books.filter(book => book.title.includes(this.state.filteredBook))} 
         addBook={this.addBook}
         />
         <Search BookSearch={this.BookSearch}/>
         <CartItems />
         <Cart CartItems={this.state.CartItems} />
      </div>
    );
  }
}

export default App;
