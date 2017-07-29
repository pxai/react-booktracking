import React from 'react'

class BookShelfChanger extends React.Component {
    state = {

    }

    updateBook (book) {
        book.shelf = this.refs.shelf.value
        this.props.onUpdateBook(book)
    }

    render () {
            const book = this.props.book
        return (
            <div className="book-shelf-changer">
                              <select ref="shelf" value={book.shelf} onChange={() => (this.updateBook(book))}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading" >Currently Reading</option>
                                <option value="wantToRead" >Want to Read</option>
                                <option value="read" >Read</option>
                                <option value="none" >None</option>
                              </select>
                            </div>
        )
    }
}

export default BookShelfChanger