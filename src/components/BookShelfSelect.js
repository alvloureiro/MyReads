import React, { Component } from "react";
import PropTypes from "prop-types";

class BookShelfSelect extends Component {
  static propTypes = {
    book: PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageLinks: PropTypes.shape({
        smallThumnail: PropTypes.string,
        thumbnail: PropTypes.string.isRequired
      }),
      title: PropTypes.string.isRequired,
      authors: PropTypes.array
    }),
    onBookShelfChange: PropTypes.func.isRequired
  };

  state = {
    shelves: [
      {
        displayName: "Currently Reading",
        name: "currentlyReading"
      },
      {
        displayName: "Want to Read",
        name: "wantToRead"
      },
      {
        displayName: "Read",
        name: "read"
      }
    ]
  };

  render() {
    const { shelves } = this.state;
    const { book, onBookShelfChange } = this.props;
    const selectValue = !book.shelf ? "moveto" : book.shelf;

    return (
      <div className="book-shelf-changer">
        <select
          value={selectValue}
          onChange={event => {
            onBookShelfChange(book, event.target.value);
          }}
        >
          <option value="moveto" disabled>
            Move to...
          </option>
          {shelves.map(shelf => (
            <option key={shelf.name} value={shelf.name}>
              {shelf.displayName}
            </option>
          ))}
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfSelect;
