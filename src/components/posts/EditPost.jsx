import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { editPost } from '../../store/actions/postActions';
import Wysiwyg from '../editor/Editor';
import { EditorState, ContentState, convertToRaw, convertFromHTML } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

class EditPost extends React.Component {
    state = {
        title: '',
        editorState: EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(this.props.post.content))),
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

    onEditorStateChange = (editorState) => {
        let content = draftToHtml(convertToRaw(editorState.getCurrentContent()));

        this.setState({
            ...this.state,
            editorState,
            content
        });
    };

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
                    <Wysiwyg editorState={this.state.editorState} onEditorStateChange={this.onEditorStateChange} />
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