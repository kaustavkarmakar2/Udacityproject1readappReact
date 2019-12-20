import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import throttle from "lodash/throttle";
import List from "./list-books";

class SearchForBooks extends React.Component {
  state = {
    books: [],
    query: ""
  };

  execSearched = query => {
    const search = (this.currentSearched = BooksAPI.search(query).then(
      books => {
        if (this.currentSearched === search) this.setState({ books })
      }
    ));
  };

  updateQuery = query => {
    this.setState(
      {
        query
      },
      () => this.execSearched(query)
    );
  };

  componentDidMount() {
    this.input.focus();
    this.execSearched = throttle(this.execSearched, 1000, {
      loading: false,
      trailing: true
    });
  }
  changeBookShelves = (book, shelf) => {
    console.log("Hiii", this);
    BooksAPI.update(book, shelf);
    this.setState({
      books: this.state.books.map(b => {
        return {
          ...b,
          shelf: b.id === book.id ? shelf : b.shelf
        };
      })
    });
  };
  handleBackClick = () => {
    this.props.onSearchBackClick();
    window.location.href = "/";
  };

  render() {
    const { books, query } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" onClick={this.handleBackClick}>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
              ref={node => (this.input = node)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <div style={{ display: "flex" }}>
            <List
              style={{
                width: 500,
                height: 500,
                paddingLeft: 10,
                paddingRight: 10
              }}
              // BookSearchAPI is giving inconsistent results
              // Please see

              books={books ? (books.error === undefined ? books : []) : []}
              onBookShelfChange={this.props.onBookShelfChange}
              changeShelf={this.changeBookShelves}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default SearchForBooks;
