import React from 'react'

//props just stands for properties its a convention, and is used for passing data between components.
function Book (props) {
// The keyword children is important for child props
//function Book ({img, title, author, children}) {
  // This is called object destructuring and this is javascipt thing not react.
  //const {img, title, author} = props.book;
  const {img, title, author} = props;

  // This is a reference example.
  const clickHandler = (e) => {
    console.log(e);
    alert('Hello World');
  };

  const complexExample = (author) => {
    console.log(author)
  };

  return (
  <article className="book" onMouseOver={ () => {

  }}>
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>Reference Example</button>
    <button type="button" onClick={ () => complexExample(author) }>More Complex Example</button>
  </article>
  );
}

// By using the keywork default you are able to do the following as an import.
// import Book from './Book';
// Also note that when you import one that is a default you don't have to keep its name i.e.
// import nope from './Book';
// Keep in mind you can only have one default per file.
export default Book
