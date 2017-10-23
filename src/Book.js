import React from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends React.Component {
    state = {

    }

    render () {
        const onUpdateBook  = this.props.onUpdateBook
        const book =this.props.book
        return (
              <div className="book">
                          <div className="book-top">
                          { undefined !== book.imageLinks &&
                            <img src={book.imageLinks.thumbnail} alt={book.title} />
                          }
                            <BookShelfChanger book={book} onUpdateBook={onUpdateBook} />
                          </div>
                          <div className="book-title">{book.title}</div>
                          { undefined !== book.authors &&
                            <div className="book-authors">{book.authors.join(', ')}</div>
                          }
                        </div>
        )
    }
}

export default Book