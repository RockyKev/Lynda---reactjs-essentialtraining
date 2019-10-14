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

const Library = ({ books }) => {
  return (
    <div>
      <h1> Welcome to the Library</h1>
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
};

render(<Library books={booklist} />, document.getElementById("root"));
