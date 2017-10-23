import React from 'react';
import BookShelf from './BookShelf';

class ListBooks extends React.Component {
    render () {
        return (
            <div className="list-books-content">
              <div>
                {
                 this.props.categories.map((category) =>
                   (
                      <BookShelf key={category.shelf} title={category.name} 
                          onUpdateBook={this.props.onUpdateBook}
                          books={this.props.books.filter(
                              (book) => (book.shelf===category.shelf))} 
                      />
                   ))
                } 
              </div>
            </div>
        )    
    }
}

export default ListBooks;