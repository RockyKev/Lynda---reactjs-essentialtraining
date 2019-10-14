import React, { Component } from "react";
import { render } from "react-dom";

let booklist = [
  { title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260 },
  { title: "White Teeth", author: "Zadie Smith", pages: 480 },
  { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 304 }
];

const Book = ({ title, author, pages, freeBookmark }) => {
  return (
    <section>
      <h2> {title} </h2>
      <p> by: {author} </p>
      <p> Pages: {pages} pages </p>
      <p> Free Bookmark Today: {freeBookmark ? "yes!" : "no!"} </p>
    </section>
  );
};

const Hiring = () => (
  <div>
    {" "}
    <p> The Library is hiring. Go to the site for more. </p>{" "}
  </div>
);
const NotHiring = () => (
  <div>
    {" "}
    <p> The Library is not hiring. Check later. </p>{" "}
  </div>
);

class Library extends Component {
  //destructuring
  state = {
    open: true,
    freeBookmark: true,
    hiring: true,
  };

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !this.state.open
    }));
  };

  render() {
    const { books } = this.props;
    return (
      <div>
        <span> {this.state.hiring ? <Hiring /> : <NotHiring />} </span>

        <h1> Welcome. The library is {this.state.open ? "open" : "closed"}!</h1>
        <button onClick={this.toggleOpenClosed}> CHANGE </button>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookmark={this.state.freeBookmark}
          />
        ))}
      </div>
    );
  }
}

render(<Library books={booklist} />, document.getElementById("root"));
