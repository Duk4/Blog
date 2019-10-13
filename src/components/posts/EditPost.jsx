import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { editPost } from '../../store/actions/postActions';

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

        const post = {
            title: this.state.title,
            content: this.state.content,
        }

        this.props.editPost(this.props.id, post);
        this.props.history.push('/');
    }

    render() {
        const { auth, post, isLoading } = this.props;

        if (!auth.uid) return <Redirect to="/" />;

        if (isLoading) {
            return (
                <div className="loading">Loading...</div>
            );
        }

        return (
            <div className="edit-post">
                <form className="edit-post-form" onSubmit={this.handleSubmit}>
                    <h3>Izmeni tekst</h3>
                    <div className="edit-input-field">
                        <label htmlFor="title">Naslov:</label>
                        <input type="text" id="title" required onChange={this.handleChange} defaultValue={post.title} />
                    </div>
                    <div className="edit-input-field">
                        <label htmlFor="textarea">Tekst:</label>
                        <textarea id="content" required onChange={this.handleChange} defaultValue={post.content} />
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

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id] : null;

    return {
        post,
        id,
        isLoading: !state.firestore.data.posts,
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        editPost: (id, post) => dispatch(editPost(id, post))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'posts' }
    ]))(EditPost);