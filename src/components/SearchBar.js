import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

class SearchBar extends Component {
  state = {
    query: "",
    searchedBooks: [],
    booksOnShelves: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ booksOnShelves: books });
    });
  }

  updateQuery = query => {
    this.setState({ query: query.trim() });

    if (query.length > 0) {
      const { booksOnShelves } = this.state;
      BooksAPI.search(query, 10).then(result => {
        if (result instanceof Array) {
          result.forEach(book => {
            booksOnShelves.forEach(shelved => {
              if (book.id === shelved.id) {
                book.shelf = shelved.shelf;
              }
            });
          });
          this.setState(state => ({ searchedBooks: result }));
        } else {
          this.setState({ searchedBooks: [] });
        }
      });
    }
  };

  clearQuery = () => {
    this.setState({ query: "" });
  };

  render() {
    const { query, searchedBooks } = this.state;
    const { onChangeBookShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => {
                this.updateQuery(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.map(book => (
              <Book key={book.id} value={book} onChangeBookShelf={onChangeBookShelf} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBar;
