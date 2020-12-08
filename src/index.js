import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css';

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth'
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg',
    title: 'Our Class is a Family',
    author: 'Shannon Olsen'
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg',
    title: 'The Vanishing Half: A Novel',
    author: 'Brit Bennett'
  },
];

// const names = ['John', 'Jim', 'Peter'];
// const newNames = names.map((name) => {
//   return <h1>name</h1>;
// });

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

//props just stands for properties its a convention, and is used for passing data between components.
function Book (props) {
// The keyword children is important for child props
//function Book ({img, title, author, children}) {
  // This is called object destructuring and this is javascipt thing not react.
  //const {img, title, author} = props.book;
  const {img, title, author} = props;

  // This is a reference example.
  const clickHandler = () => {
    alert('Hello World');
  };

  return (
  <article className="book">
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>Reference Example</button>
  </article>
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
