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
                      <li>
                            <Book book={this.props.books[0]} />
                      </li>
                      <li>
                            <Book book={this.props.books[1]} />
                      </li>
                    </ol>
                  </div>
                </div>
        )
    }
}

export default BookShelf;