import React from 'react'

class BookShelfChanger extends React.Component {
    state = {

    }

    updateBook (book) {
        book.shelf = this.refs.shelf.value
        console.log('in the changer: ' + book.title + ' change to:' + this.refs.shelf.value)
        this.props.onUpdateBook(book)
    }

    render () {
            const { book, onUpdateBook } = this.props
        return (
            <div className="book-shelf-changer">
                              <select ref="shelf" onChange={() => (this.updateBook(book))}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading" selected={book.shelf==="currentlyReading"}>Currently Reading</option>
                                <option value="wantToRead" selected={book.shelf==="wantToRead"}>Want to Read</option>
                                <option value="read" selected={book.shelf==="read"}>Read</option>
                                <option value="none" >None</option>
                              </select>
                            </div>
        )
    }
}

export default BookShelfChanger