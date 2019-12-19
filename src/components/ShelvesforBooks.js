import React from "react";
import BookShelf from "./BookShelf";

class ShelvesForBooks extends React.Component {
  render() {
    // const shelves = {
    //     currentlyReading: ['Currently Reading', 'currentlyReading'],
    //     wantToRead: ['Want to Read', 'wantToRead'],
    //     read: ['Read', 'read']
    // }
    const allBooksForSheveles = this.props.allBooksForSheveles;
    const currentlyReading = allBooksForSheveles.filter(
      book => book.shelf === "currentlyReading"
    );
    const wantToRead = allBooksForSheveles.filter(
      book => book.shelf === "wantToRead"
    );
    const read = allBooksForSheveles.filter(book => book.shelf === "read");
    console.log("fff", allBooksForSheveles);

    return (
      <div className="list-books-content">
        <div>
          {/*ShelvesForBooks-currentely read*/}
          <BookShelf
            books={currentlyReading}
            title={"Currently Reading"}
            changeShelf={this.props.changeShelf}
          />
          {/* <BookShelf changeShelf={this.renderObj()}/> */}
          {/*ShelvesForBooks-want to read*/}
          <BookShelf
            books={wantToRead}
            title={"Want To Read"}
            changeShelf={this.props.changeShelf}
          />
          {/*ShelvesForBooks-read*/}
          <BookShelf
            books={read}
            title={"Read"}
            changeShelf={this.props.changeShelf}
          />
        </div>
      </div>
    );
  }
}
export default ShelvesForBooks;
