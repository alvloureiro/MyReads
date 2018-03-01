import React, { Component } from "react";
import PropTypes from "prop-types";
import ShelfTitle from "./ShelfTitle";
import ShelfButtonSearch from "./ShelfButtonSearch";
import Shelves from "./Shelves";

class BookShelves extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
  };

  render() {
    const { books, onChangeBookShelf } = this.props;
    return (
      <div className="list-books">
        <ShelfTitle title="My Reads" />
        <Shelves books={books} onChangeBookShelf={onChangeBookShelf} />
        <ShelfButtonSearch label="Add Book" />
      </div>
    );
  }
}

export default BookShelves;
