import React from 'react';

class EditPost extends React.Component {
    state = {
        title: '',
        text: ''
    }

    render() {
        return (
            <div className="edit-post">
                <form className="edit-post-form">
                    <h3>Izmeni tekst</h3>
                    <div className="edit-input-field">
                        <label htmlFor="title-text">Naslov:</label>
                        <input type="text" id="title-text" />
                    </div>
                    <div className="edit-input-field">
                        <label htmlFor="textarea">Tekst:</label>
                        <textarea />
                    </div>
                    <div className="edit-input-field btns">
                        <button className="cancel-btn">Odbaci</button>
                        <button className="submit-btn">Sačuvaj</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditPost;