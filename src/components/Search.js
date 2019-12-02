import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import throttle from "lodash/throttle";
import List from "./list-books";
class Search extends React.Component {
  state = {
    books: [],
    query: ""
  };

  execSearched = query => {
    const search = (this.currentSearched = BooksAPI.search(query).then(
      books => {
        //serState only for the current searched result
        if (this.currentSearched === search) this.setState({ books });
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

  render() {
    const { books, query } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
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
          <ol className="books-grid"></ol>
          <List 
            // BookSearchAPI is giving inconsistent results
            // Please see
            books={books ? (books.error === undefined ? books : []) : []}
            onBookShelfChange={this.props.onBookShelfChange}
          />
        </div>
      </div>
    );
  }
}
export default Search;
