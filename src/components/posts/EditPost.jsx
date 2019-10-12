import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class EditPost extends React.Component {
    state = {
        title: '',
        content: ''
    }

    goBack = (e) => {
        e.preventDefault();

        this.props.history.goBack();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //this.props.editPost(this.state);
        //this.props.history.push('/');
    }

    render() {
        return (
            <div className="edit-post">
                <form className="edit-post-form" onSubmit={this.handleSubmit}>
                    <h3>Izmeni tekst</h3>
                    <div className="edit-input-field">
                        <label htmlFor="title">Naslov:</label>
                        <input type="text" id="title" required onChange={this.handleChange} />
                    </div>
                    <div className="edit-input-field">
                        <label htmlFor="textarea">Tekst:</label>
                        <textarea id="content" required onChange={this.handleChange} />
                    </div>
                    <div className="edit-input-field btns">
                        <button className="cancel-btn" onClick={this.goBack}>Odbaci</button>
                        <button className="submit-btn" type="submit">Sačuvaj</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditPost;