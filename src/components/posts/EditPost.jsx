import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { editPost } from '../../store/actions/postActions';
import Wysiwyg from '../editor/Editor';
import { EditorState, ContentState, convertToRaw, convertFromHTML } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Helmet } from 'react-helmet';

class EditPost extends React.Component {
    state = {
        title: '',
        editorState: '',
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

    onLoad = () => {
        this.setState({
            ...this.state,
            title: this.props.post.title,
            content: this.props.post.content
        });

        const el = document.getElementById('scroll-into-edit');
        el.scrollIntoView({ behavior: "smooth", block: "start" });
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
            <div className="edit-post" id="scroll-into-edit">
                <Helmet>
                    <title>Edit post</title>
                </Helmet>
                <form className="edit-post-form" onLoad={this.onLoad} onSubmit={this.handleSubmit}>
                    <h3>Edit post</h3>
                    <div className="edit-input-field">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" required onChange={this.handleChange} defaultValue={post.title} />
                    </div>
                    <Wysiwyg
                        editorState={EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(this.props.post.content)))}
                        onEditorStateChange={this.onEditorStateChange}
                    />
                    <div className="edit-input-field btns">
                        <button className="cancel-btn" onClick={this.goBack}>Cancel</button>
                        <button className="submit-btn" type="submit">Save</button>
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