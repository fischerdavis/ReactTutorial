import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css';

function Booklist() {
  return (
    <section className="bookList">
      <Book />
    </section>
  );
}

function Book () {
  return (
  <article className="book">
    <img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" alt="" />
    <h1>I Love You to the Moon and Back</h1>
    <h4>Amelia Hepworth</h4>
  </article>
  );
}

// const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" alt="" />
// In style, {{}} the outer {} just means that we are back in javascript world,
// the inner {} means that it is an object.
// Also side note -> inline css takes prescedence over css imported from a file.
// const Author = () => <h4 style={{ color: '#617d98', fontSize: '0.75rem',margin: '0.25rem' }}>Amelia Hepworth</h4>

ReactDom.render(<Booklist />, document.getElementById("root"));
