import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createPost } from '../../store/actions/postActions';

class NewPost extends React.Component {
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

        this.props.createPost(this.state);
        this.props.history.push('/');
    }

    render() {
        const { auth } = this.props;

        if (!auth.uid) return <Redirect to="/" />;

        return (
            <div className="new-post">
                <form className="new-post-form" onSubmit={this.handleSubmit}>
                    <h3>Novi tekst</h3>
                    <div className="new-input-field">
                        <label htmlFor="title">Naslov:</label>
                        <input type="text" id="title" required onChange={this.handleChange} />
                    </div>
                    <div className="new-input-field">
                        <label htmlFor="textarea">Tekst:</label>
                        <textarea id="content" required onChange={this.handleChange} />
                    </div>
                    <div className="new-input-field btns">
                        <button className="cancel-btn" onClick={this.goBack}>Odbaci</button>
                        <button type="submit" className="submit-btn">Potvrdi</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);