import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchBar from "./components/SearchBar";
import BookShelves from "./components/BookShelves";

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(result => {
      if (result) {
        BooksAPI.getAll().then(books => {
          this.setState({ books });
        });
      }
    });
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <BookShelves books={books} onChangeBookShelf={this.changeBookShelf} />}
        />
        <Route
          path="/search"
          render={() => <SearchBar onChangeBookShelf={this.changeBookShelf} />}
        />
      </div>
    );
  }
}

export default BooksApp;
