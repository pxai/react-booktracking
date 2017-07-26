import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import Book from './Book'

class BookShelf extends React.Component {
    state = {

    }
    render () {
      
        return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                         { 
                   this.props.books.map((book) =>
                   (
                      <li key={book.id}>
                            <Book  book={book} onUpdateBook={this.props.onUpdateBook} />
                      </li>
                   ))}
                    </ol>
                  </div>
                </div>
        )
    }
}

export default BookShelf;