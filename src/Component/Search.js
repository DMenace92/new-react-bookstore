import React, { Component } from 'react';
import "../App.css"


class Search extends Component {
    render () {
        return (
            <form>
           <div className="Search">
               <input placeholder="search" onChange={this.props.BookSearch}></input>
           </div>
           </form>
        )
}
}
export default Search;