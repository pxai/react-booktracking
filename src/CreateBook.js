import React,  {Component} from 'react';
import  { Link } from 'react-router-dom'; 
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';

class CreateBook extends Component {
    handleSubmit =  (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, {hash: true});
        console.log(values);
        if (this.props.onCreateBook)
            this.props.onCreateBook(values);
    }

    render () {
        return (
            <div>
                 <Link className="close-search" to="/">Close</Link>
            <div className="create-form">
                <form onSubmit={this.handleSubmit} className="create-contact-form">
                                   <div><h2>Create new Book</h2></div>
                        <div className="create-book-details">
                            <div><label htmlFor="title">Title</label></div>
                            <div><input type="text" name="title" 
                                    placeholder="Book title here"/></div>
                            <div><label htmlFor="author">Author</label></div>
                            <div><input type="text" name="authors" 
                                    placeholder="Authors' names comma separated" /></div>
                            <div><label htmlFor="shelf">Status</label></div>
                            <div><select name="shelf">
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select></div>
                            <div><label htmlFor="image">Image</label></div>
                            <div><ImageInput
                                    className='create-contact-avatar-input'
                                    name='imageLinks'
                                    maxHeight={64}
                                /></div>
                            <button>Create</button>
                        </div>
                    </form>
            </div>
            </div>
        )
    }
}

export default CreateBook
