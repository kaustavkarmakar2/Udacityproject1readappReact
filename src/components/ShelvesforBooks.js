import React from "react";
import BookShelf from "./BookShelf";

class ShelvesForBooks extends React.Component {
  state = {
    books: [],
    shelf: ""
  };
  render() {
    const shelves = {
      currentlyReading: ["Currently Reading", "currentlyReading"],
      wantToRead: ["Want to Read", "wantToRead"],
      read: ["Read", "read"]
    };
    console.log(shelves);
    //  const allBooksForSheveles = this.props.allBooksForShevele;
    // const currentlyReading = allBooksForSheveles.filter(
    //   book => book.shelf === "currentlyReading"
    // );
    // const wantToRead = allBooksForSheveles.filter(
    //   book => book.shelf === "wantToRead"
    // );
    // const read = allBooksForSheveles.filter(book => book.shelf === "read");
    //  console.log("fff", allBooksForSheveles);

    return (
      <div className="list-books-content">
        <div className="list-books-content">
          {Object.keys(shelves).map(shelf => (
            <BookShelf
              key={shelf}
              shelf={shelves[shelf][1]}
              title={shelves[shelf][0]}
              books={this.state.books}
              onShelfChange={() => {
                this.props.changeShelf(shelf);
              }}
            />
          ))}
          <div>
       
      
     </div> 
        </div>
      </div>
    );
  }
}
export default ShelvesForBooks;


  /* <div>
       
          <BookShelf
            books={currentlyReading}
            title={"Currently Reading"}
            changeShelf={this.props.changeShelf}
          />
          
          <BookShelf
            books={wantToRead}
            title={"Want To Read"}
            changeShelf={this.props.changeShelf}
          />
        
          <BookShelf
            books={read}
            title={"Read"}
            changeShelf={this.props.changeShelf}
          />
        </div> */

