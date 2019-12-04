import React from "react";


class List extends React.Component {
  
  render() {
    
    return (
      
      <React.Fragment>
        {/* {this.props.books.map(book => (
         
          <div key={book.id}>
            <div 
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail}`
              }}
              ></div>
            <h5>{book.title}</h5>
            <h6>{book.authors}</h6>
          </div>
        ))} */}
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.map(book =>(
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
                                <select value={book.shelf} onChange={e=>this.props.changeShelf(book,e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
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
            </div>
        </div>
      </React.Fragment>
    );
  }
}
export default List;
