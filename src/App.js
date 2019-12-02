import React from "react";
import "./App.css";
import Header from "./components/Header";
import Shelves from "./components/Shelves";
import Search from "./components/Search";

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
    BooksAPI.getAll().then(resp => this.setState({ books: resp }));
  };
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
                  <Header />
                  <Shelves
                    allBooks={this.state.books}
                    changeShelf={this.changeBookShelves}
                  />
                  <SearchButton />
                </div>
              )
            }
          />
          <Route path="/search" render={() => <Search />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
