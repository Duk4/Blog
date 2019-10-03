import React from 'react';

class NewPost extends React.Component {
    state = {
        title: '',
        text: ''
    }

    render() {
        return (
            <div className="new-post">
                <form className="new-post-form">
                    <h3>Novi tekst</h3>
                    <div className="new-input-field">
                        <label htmlFor="title-text">Naslov:</label>
                        <input type="text" id="title-text" />
                    </div>
                    <div className="new-input-field">
                        <label htmlFor="textarea">Tekst:</label>
                        <textarea />
                    </div>
                    <div className="new-input-field btns">
                        <button className="cancel-btn">Odbaci</button>
                        <button className="submit-btn">Potvrdi</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewPost;