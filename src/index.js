import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css';

firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth'
}


function Booklist() {
  return (
    <section className="bookList">
      <Book firstBook/>
      <Book title='Title' number={23}/>
    </section>
  );
}

//props just stands for properties its a convention 
function Book (props) {
  return (
  <article className="book">
    <img src={props.img} alt="" />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
    <p>{props.job}</p>
  </article>
  );
}

// const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" alt="" />
// In style, {{}} the outer {} just means that we are back in javascript world,
// the inner {} means that it is an object.
// Also side note -> inline css takes prescedence over css imported from a file.
// const Author = () => <h4 style={{ color: '#617d98', fontSize: '0.75rem',margin: '0.25rem' }}>Amelia Hepworth</h4>

ReactDom.render(<Booklist />, document.getElementById("root"));
