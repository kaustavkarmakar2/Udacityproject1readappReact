import React from 'react';
import Shelf from './BookShelf';
//
//needToChange
class ShelvesForBooks extends React.Component{
    render(){
        const allBooksForSheveles = this.props.allBooksForSheveles;
        const currentlyReading = allBooksForSheveles.filter(book => book.shelf==='currentlyReading' );
        const wantToRead= allBooksForSheveles.filter(book => book.shelf==='wantToRead' );
        const read = allBooksForSheveles.filter(book => book.shelf ==='read' );
        console.log("fff",allBooksForSheveles) 
        return(
            <div className="list-books-content">
                <div>
                    {/*ShelvesForBooks-currentely read*/}
                    <Shelf books={currentlyReading} title={"Currently reading"} changeShelf={this.props.changeShelf}/>
                    {/*ShelvesForBooks-want to read*/}
                    <Shelf books={wantToRead} title={"Want To read"} changeShelf={this.props.changeShelf}/>
                    {/*ShelvesForBooks-read*/}
                    <Shelf books={read} title={"read"} changeShelf={this.props.changeShelf}/>
                </div>
            </div>
        )
    }
     
}
export default ShelvesForBooks;