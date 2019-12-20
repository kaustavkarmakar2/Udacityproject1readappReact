import React from "react";

class BookShelf extends React.Component {
  render() {
    const shelfForBooks = this.props.books;
   
    
    return (
      <React.Fragment>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
              {shelfForBooks.map(book => {
                
                
                
                let imageURL
                
                if (book !== undefined) {
                  imageURL = book.imageLinks
                    ? book.imageLinks.thumbnail 
                    : "http://via.placeholder.com/123x98";
              }return (

                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${imageURL})`
                         
                        }}
                      ></div>

                      <div className="book-shelf-changer">
                        <select
                          className="id"
                          value={book.shelf}
                          onChange={event =>
                            this.props.changeShelf(book, event.target.value)
                          }
                        >
                          <option value="move" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                            Currently Reading
                          </option>
                          <option value="wantToRead">Want to read</option>
                          <option value="read">read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                      Ï
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                    
                  </div>
                </li> 
              )})}
              
            </ol>
            </div>
        
      </div>
      </React.Fragment>
    );
  }
}
export default BookShelf;
/* <div className="bookshelf-books">
          <ol className="books-grid">
            {shelfForBooks.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail}`
                      }}
                    ></div>

                    <div className="book-shelf-changer">
                      <select
                        value={book.shelf}
                        onChange={e =>
                          this.props.changeShelf(book, e.target.value)
                        }
                      >
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">Currently read</option>
                        <option value="wantToRead">Want to read</option>
                        <option value="read">readForBooks</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
          </ol>
        </div> */