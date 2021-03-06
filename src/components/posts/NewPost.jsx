import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createPost } from '../../store/actions/postActions';
import Wysiwyg from '../editor/Editor';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

class NewPost extends React.Component {
    state = {
        title: '',
        editorState: EditorState.createEmpty(),
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

        let post = { title: this.state.title, content: this.state.content };
        this.props.createPost(post);
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

    componentDidMount() {
        const el = document.getElementById('scroll-into-new');
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    render() {
        console.log(this.content);
        const { auth } = this.props;

        if (!auth.uid) return <Redirect to="/" />;

        return (
            <div className="new-post" id="scroll-into-new">
                <Helmet>
                    <title>New post</title>
                </Helmet>
                <form className="new-post-form" onSubmit={this.handleSubmit}>
                    <h3>New post</h3>
                    <div className="new-input-field">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" required onChange={this.handleChange} />
                    </div>
                    <Wysiwyg editorState={this.state.editorState} onEditorStateChange={this.onEditorStateChange} />
                    <div className="new-input-field btns">
                        <button className="cancel-btn" onClick={this.goBack}>Cancel</button>
                        <button type="submit" className="submit-btn">Publish</button>
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