import React, { Component } from "react";
import { render } from "react-dom";

let booklist = [
  { title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260 },
  { title: "White Teeth", author: "Zadie Smith", pages: 480 },
  { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 304 }
];

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2> {title} </h2>
      <p> by: {author} </p>
      <p> Pages: {pages} pages </p>
    </section>
  );
};

class Library extends Component {
  //     constructor(props) {
  //     super(props);
  //     this.state = {
  //       open: false
  //     };
  //     this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
  //   }

  //destructuring
  state = { open: false };

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !this.state.open
    }));
  };

  //   Typically, it's clean like this.
  //   But when working with others... you have a lot of callbacks.
  //     toggleOpenClosed() {
  //       this.setState({
  //         open: !this.state.open
  //       });
  //     }

  //   this pulls the prevState, which works
  //     toggleOpenClosed() {
  //       this.setState(prevState => ({
  //         open: !this.state.open
  //       }));
  //     };

  render() {
    const { books } = this.props;
    return (
      <div>
        <h1> Welcome. The library is {this.state.open ? "open" : "closed"}!</h1>
        <button onClick={this.toggleOpenClosed}> CHANGE </button>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
          />
        ))}
      </div>
    );
  }
}

render(<Library books={booklist} />, document.getElementById("root"));
