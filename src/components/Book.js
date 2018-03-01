import React from "react";
import PropTypes from "prop-types";
import BookShelfSelect from "./BookShelfSelect";
import bookIcon from "../icons/book.svg";

const Book = ({ value, onChangeBookShelf }) => {
  const { id, imageLinks, title, authors } = value;

  const bookAuthors = !authors ? ["Unknown"] : authors;
  const bookTitle = !title ? "Unknown" : title;
  const bookThumbnail = !imageLinks ? bookIcon : imageLinks.thumbnail;

  return (
    <li key={id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${bookThumbnail})`
            }}
          />
          <BookShelfSelect book={value} onBookShelfChange={onChangeBookShelf} />
        </div>
        <div className="book-title">{bookTitle}</div>
        {bookAuthors.map(author => (
          <div className="book-authors" key={author}>
            {author}
          </div>
        ))}
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageLinks: PropTypes.shape({
      smallThumnail: PropTypes.string,
      thumbnail: PropTypes.string.isRequired
    }),
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    shelf: PropTypes.string
  }),
  onChangeBookShelf: PropTypes.func.isRequired
};

export default Book;
