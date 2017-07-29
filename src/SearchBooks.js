import React from 'react'
import BookShelf from './BookShelf';
import Book from './Book';
import  { Link } from 'react-router-dom'; 

class SearchBooks extends React.Component {
  state = {
      books: []
    }

  componentDidMount() {
      console.log(this.state.books);
  }

   searchBook = (e) => {
        const searchTerm = this.refs.term.value
        if (searchTerm.length < 3 ) return;
        console.log('in the changer: ' + searchTerm)
    // const filteredBooks = this.props.onSearchBook(e.target.value)
      this.props.onSearchBook(searchTerm)
      /*this.setState(state => ({
        books: this.props.onSearchBook(searchTerm)
      }))*/
      //console.log(filteredBooks)
    }

    render () {
      const areBooksFound = this.props.books;
      console.log(areBooksFound)
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
                 {undefined != this.props.books && this.props.books.length > 0 &&
  
                   this.props.books.map((book) =>
                   (
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