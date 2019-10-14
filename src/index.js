import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

//prop types and default values

let booklist = [
  { title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260 },
  { title: "White Teeth", author: "Zadie Smith", pages: 480 },
  { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 304 }
];

const Book = ({
  title = "No Title Provided",
  author = "No author",
  pages = 0,
  freeBookmark
}) => {
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
  static defaultProps = {
    book: [{ title: "Tahoe tales", author: "Chet Witney", pages: 1000 }]
  };

  //destructuring
  state = {
    open: true,
    freeBookmark: true,
    hiring: true,
    data: [],
    loading: false
  };

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !this.state.open
    }));
  };

  componentDidMount() {
    console.log("the component is now mounted!");
    this.setState({ loading: true });

    fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
      .then(data => data.json())
      .then(data => this.setState({ data, loading: false }));
  }

  componentDidUpdate() {
    console.log("Component now updated!");
  }

  render() {
    const { books } = this.props;
    return (
      <div>
        <span> {this.state.hiring ? <Hiring /> : <NotHiring />} </span>

        {this.state.loading ? (
          "loading..."
        ) : (
          <div>
            {this.state.data.map(product => {
              return (
                <div key={product.id}>
                  <h3>Library Product of the Week!</h3>
                  <h4>{product.name}</h4>
                  <img alt={product.name} src={product.image} height={100} />
                </div>
              );
            })}
          </div>
        )}

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

Library.propTypes = {
  books: PropTypes.array
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool
};

render(<Library books={booklist} />, document.getElementById("root"));
