import React, { Component } from 'react'
import CartItems from './CartItems'

class Cart extends Component{
    render(){
        console.log(this.props.CartItems)
        const newBook = this.props.CartItems.map(book=> <CartItems key={book.id} newBook={book} />)
        
        return(
            <div>
                <h1>Book is in Cart</h1>
                {newBook}
                <h2>{this.props.CartItems.reduce((sum,book)=>{
                    return sum + book.price
                    },0)}</h2>
            </div>
        )
    }
}



export default Cart;









// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// class Cart extends Component{
    
//         constructor(props) {
//           super(props);
//           this.state = {
//             modal: false
//           };
      
//           this.toggle = this.toggle.bind(this);
//         }
      
//         toggle() {
//           this.setState({
//             modal: !this.state.modal
//           });
//         }
      
//     render(){
//         return(
//             <div>
//             <Button className="modal" color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
//         <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
//           toggle={this.toggle} className={this.props.className}>
//           <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
//           <ModalBody>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
//             <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//           </ModalFooter>
//         </Modal>
//             </div>
//         )
//     }
// }
// export default Cart;