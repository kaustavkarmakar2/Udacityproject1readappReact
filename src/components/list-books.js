import React from "react";

class List extends React.Component {
  state = {
    book: [],
    query: ""
  };
  image = book => {
    if (book.imageLinks && book.imageLinks.thumbnail !== undefined)
      this.setState({ book: book });
  };

  render() {
    
    return (
      <React.Fragment>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map(book => {
                console.log(book)
                let imageURL
                if (book !== undefined) {
                  imageURL = book.imageLinks.thumbnail 
                     ? book.imageLinks.thumbnail ||[]
                     : "http://via.placeholder.com/123x98";
              }

               

                return (

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
                          value={"none"}
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
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                    {console.log("books", this.props.image)}
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
export default List;
