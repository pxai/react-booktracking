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
                <form onSubmit={this.handleSubmit} className="create-contact-form">
                        <div className="create-book-details">
                                      <ImageInput
            className='create-contact-avatar-input'
            name='bookUrl'
            maxHeight={64}
          />
                            <div><label htmlFor="title">Title</label></div>
                            <div><input type="text" name="title" 
                                    placeholder="Book title here"/></div>
                            <div><label htmlFor="author">Author</label></div>
                            <div><input type="text" name="author" 
                                    placeholder="Author's name" /></div>
                            <div><label htmlFor="status">Status</label></div>
                            <div><select name="status">
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select></div>
                            <div><label htmlFor="image">Image</label></div>
                            <div><ImageInput
                                    className='create-contact-avatar-input'
                                    name='bookUrl'
                                    maxHeight={64}
                                /></div>
                            <button>Create</button>
                        </div>
                    </form>
            </div>
        )
    }
}

export default CreateBook
