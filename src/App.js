import React from "react";
import "./App.css";
import HeaderForBooks from "./components/HeaderForBooks";
import BookShelf from "./components/ShelvesforBooks";
import SearchForBooks from "./components/SearchForBooks";

import SearchButton from "./components/SearchButton";
import { BrowserRouter, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    isLoading: false
  };
  updatedshowSearchPageState = state => {
    this.setState({ showSearchPage: state });
  };
  componentDidMount = () => {
    this.fetchInfo();
  };
  fetchInfo = () => {
    BooksAPI.getAll().then(resp => this.setState({ books: resp }));
  };
  changeBookShelvesForBooks = (book, shelf) => {
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
  handleSearchBackClick = () => {
    this.fetchInfo();
  };
  render() {
    const { isLoading } = this.state;
    return (
      <BrowserRouter>
        <div className="app">
          <Route
            exact
            path="/"
            render={() =>
              isLoading ? (
                <p className="loading-message">loading</p>
              ) : (
                <div className="list-books">
                  <HeaderForBooks />
                  <BookShelf
                    allBooksForSheveles={this.state.books}
                    changeShelf={this.changeBookShelvesForBooks}
                  />
                  <SearchButton />
                </div>
              )
            }
          />
          <Route
            path="/search"
            render={() => (
              <SearchForBooks onSearchBackClick={this.handleSearchBackClick} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
