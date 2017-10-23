import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import CreateBook from './CreateBook'
import categories from './bookcategories'
import { Link } from 'react-router-dom';

class BooksApp extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
        books: [], //booksdata,
        searchedBooks: [],
        categories: categories,
        loading: true,
      }
  }

  componentWillMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books, loading: false })
    })
  }

  updateBook = (book) => {
          BooksAPI.update(book, book.shelf).then(res => {
            this.setState(state => ({
              books: state.books.filter(b => b.id !== book.id).concat([ book ])
            }))
          })
  }



    createBook(book) {
      if (!book.imageLinks)
        book.imageLinks = { thumbnail : 'http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api'};
      else
        book.imageLinks = { thubnail: book.imageLinks }

      book.authors = book.authors.split(',')

      this.setState(state => ({
        books: state.books.concat([ book ])
      }))
  }

  render() {
    const books = this.state.books;

    return (
      <div className="app">
        <div className="list-books">
            <div className="list-books-title">
              <h1>Pello's MyReads</h1>
            </div>

        <Route path="/" exact render={() => (
            <ListBooks 
              books={books} 
              categories={categories} 
              onUpdateBook={(book) => this.updateBook(book)}
            />
        )}/>
        <Route path="/search" exact render={({history}) => (
            <SearchBooks 
              books={books}
              onUpdateBook={(book) => this.updateBook(book)}
            />
        )}/>
        <Route path='/create' render={({ history }) => (
            <CreateBook
              onCreateBook={(book) => {
                this.createBook(book)
                history.push('/')
              }}
            />
        )}/>
            <div className="open-search">
              <Link to='/search' className='open-search'>Search</Link>
            </div>
            <div className="open-create">
              <Link to='/create' className='add-book'>Add a book</Link>
            </div>
      </div>
      </div>
    )
  }
}

export default BooksApp
