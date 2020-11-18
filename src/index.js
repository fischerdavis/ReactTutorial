import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css';

function Booklist() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

function Book () {
  return (
  <article>
    <Image />
    <Title />
    <Author />
  </article>
  );
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" alt="" />

const Title = () => <h1>I Love You to the Moon and Back</h1>

const Author = () => <h4>Amelia Hepworth</h4>
ReactDom.render(<Booklist />, document.getElementById("root"));
