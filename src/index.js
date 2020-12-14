import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css';
import { books } from './books';
import Book from './Book';

function Booklist() {
  return (
    // The child prop goes inbetween the <book> IN HERE!!! </book>
    // The child prop will be connected "on" the main prop.
    // <section className="bookList">{newNames}</section>
    <section className="bookList">{books.map((book) =>{
      // As long as you pass the "key" <- this is a special prop then you won't get a key warning.
      // return <Book key={book.id} book={book}></Book>
      // This is the spread operator and it will spread the variables out and send them as props.
      return <Book key={book.id} {...book}></Book>
    })}</section>
  );
}

// <> </> These are called react fragments and the purpose of them I believe is to avoid div soup,
// but allows for the return of multiple elements.

// const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" alt="" />
// In style, {{}} the outer {} just means that we are back in javascript world,
// the inner {} means that it is an object.
// Also side note -> inline css takes prescedence over css imported from a file.
// const Author = () => <h4 style={{ color: '#617d98', fontSize: '0.75rem',margin: '0.25rem' }}>Amelia Hepworth</h4>

ReactDom.render(<Booklist />, document.getElementById("root"));
