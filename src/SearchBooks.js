import React from 'react'
import Book from './Book';
import * as BooksAPI from './BooksAPI'
import  { Link } from 'react-router-dom'; 


class SearchBooks extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
          searchedBooks: []
        }
     }


    searchBook = (ev) => {
      const term = ev.target.value;

      BooksAPI.search(term, 10).then((searchResult) => {
       let newResults = [];
       let books = this.props.books;
         newResults = searchResult.map(function(book){

           for (let i = 0; i < books.length; i++) {       
             if (books[i].id === book.id) {
               book.shelf = books[i].shelf;
               return book;
             }
           }
           return book;
         });

       this.setState({ 
         searchedBooks: newResults 
       });
     });
   }

    render () {

        return (
         <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/* 
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" ref="term" onChange={this.searchBook} placeholder="Search by title or author"/>
                
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.searchedBooks && this.state.searchedBooks.map(book => (
                      <li key={book.id}>
                            <Book  book={book} onUpdateBook={this.props.onUpdateBook} />
                      </li>
                   ))
                 }
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks