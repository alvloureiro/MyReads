import React, { Component } from "react";
import Book from "./Book";

class Shelves extends Component {
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
    const { books, onChangeBookShelf } = this.props;
    return (
      <div className="list-books-content">
        {shelves.map(shelf => (
          <div key={shelf.name} className="bookshelf">
            <h2 className="bookshelf-title">{shelf.displayName}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter(book => book.shelf === shelf.name)
                  .map(book => (
                    <Book key={book.id} value={book} onChangeBookShelf={onChangeBookShelf} />
                  ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Shelves;
