import React from "react";


class List extends React.Component {
  
  render() {
    
    return (
      
      <React.Fragment>
        {this.props.books.map(book => (
         
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
        ))}
      </React.Fragment>
    );
  }
}
export default List;
