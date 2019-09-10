import React, { Component } from 'react';

class EditPost extends Component {
    state = {
        title: '',
        text: ''
    }

    render() {
        return (
            <div className="new-post">
                <form className="new-post-form">
                    <h3>Izmeni tekst</h3>
                    <div className="input-field">
                        <label htmlFor="title-text">Naslov:</label>
                        <input type="text" id="title-text" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="textarea">Tekst:</label>
                        <textarea />
                    </div>
                    <div className="input-field">
                        <div></div>
                        <button className="cancel-btn">Odbaci</button>
                        <button className="submit-btn">Sačuvaj</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditPost;