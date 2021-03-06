import React from "react";
import { Link } from "react-router-dom"
import FlipMove from 'react-flip-move';

// Data
import { books } from "../../data/bookdata";

// Components
import { SearchBar } from "../SearchBar";
import { BookList } from "../BookList";
import { BookItem } from "../BookItem";

export class HomePage extends React.Component {
  // Add state to the component
  state = {
    // The searchterm inside the searchbar
    searchTerm: "",
    // Check if the user is currently searching
    isSearching: false
  }

  // The actual search function that we run when we change the state
  searchBooks = (search) => {
    if (!search) {
      // if there is no searchterm in the searchbar, set isSearching to false and display the default layout
      this.setState({ isSearching: false })
    } else {
      // if there is a searchterm in the searchbar, change the state and display the results
      this.setState({ searchTerm: search, isSearching: true })
    }
  }

  render() {
    return (

      // If the user is currently searching for something then ...
      (this.state.isSearching == true) ?
        // ... display our searchresults
        (<div className="container">
          <SearchBar searchFunction={this.searchBooks} placeholder="Search..." />
          <BookList title="Search">
            <FlipMove>
              {books
                .filter(book => {
                  // Filter the bookdate for the items that match the search
                  return book.title
                    .toLowerCase() // Set the title to lowercase to avoid conflicts with capitalization of the letter
                    .includes(
                      this.state.searchTerm
                        .toLocaleLowerCase() // fix the capitalitzation of the searchterm
                    )
                })
                .map(book => (
                  // Display the books
                  <Link to={"/book/" + book.id}>
                    <BookItem
                      key={book.id}
                      img={book.img}
                      title={book.title}
                      author={book.author}
                    />
                  </ Link>
                ))}
            </FlipMove>
          </BookList>
        </div>)

        
        // If the user is not searching, display the default components
        : (<div className="container">
          <SearchBar searchFunction={this.searchBooks} placeholder="Search..." />
          <BookList title="Popular">
            {books
              .filter(book => {
                return book.popular === true;
              })
              .map(book => (
                <Link to={"/book/" + book.id}>
                  <BookItem
                    key={book.id}
                    img={book.img}
                    title={book.title}
                    author={book.author}
                  />
                </ Link>
              ))}
          </BookList>

          <BookList title="Favorite">
            {books
              .filter(book => {
                return book.favorite === true;
              })
              .map(book => (
                <Link to={"/book/" + book.id}>
                  <BookItem
                    key={book.id}
                    img={book.img}
                    title={book.title}
                    author={book.author}
                    rating={book.rating}
                    layout="card"
                  />
                </ Link>
              ))}
          </BookList>

          <BookList title="Reading">
            {books
              .filter(book => {
                return book.reading === true;
              })
              .map(book => (
                <Link to={"/book/" + book.id}>
                  <BookItem key={book.id} img={book.img} />
                </ Link>
              ))}
          </BookList>
        </div>)
    );
  }
}