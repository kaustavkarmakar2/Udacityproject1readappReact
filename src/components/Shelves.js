import React from 'react';
import Shelf from './Shelf';
//
//needToChange
class Shelves extends React.Component{
    render(){
        const allBooks = this.props.allBooks;
        const currentlyReading = allBooks.filter(book => book.shelf==='currentlyReading' );
        const wantToRead = allBooks.filter(book => book.shelf==='wantToRead' );
        const read = allBooks.filter(book => book.shelf ==='read' );
        console.log("fff",allBooks) 
        return(
            <div className="list-books-content">
                <div>
                    {/*Shelf-currentely reading*/}
                    <Shelf books={currentlyReading} title={"Currently Reading"} changeShelf={this.props.changeShelf}/>
                    {/*Shelf-want to read*/}
                    <Shelf books={wantToRead} title={"Want To Read"} changeShelf={this.props.changeShelf}/>
                    {/*Shelf-read*/}
                    <Shelf books={read} title={"Read"} changeShelf={this.props.changeShelf}/>
                    {/*Shelf*/}
                   
                </div>
            </div>
        )
    }
     
}
export default Shelves;