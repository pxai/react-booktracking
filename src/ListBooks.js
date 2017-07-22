import React from 'react';
import BookShelf from './BookShelf';
import books from './bookdata'
import categories from './bookcategories'

class ListBooks extends React.Component {
    state = {

    }

    render () {
        return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                 categories.map((category) =>
                   (
                      <BookShelf title={category.name} books={books.filter((book) => (book.status===category.status))} />
                   ))
                } 
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )    
    }
}

export default ListBooks;