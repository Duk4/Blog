import React from "react";
import moment from 'moment';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { deletePost } from '../../store/actions/postActions';

const Post = (props) => {
    const { deletePost, auth, post, isLoading } = props;

    if (isLoading) {
        return (
            <div className="loading">Loading...</div>
        );
    }

    const handleDelete = (e) => {
        e.preventDefault();
        let id = window.location.pathname.slice(9);

        deletePost(id);
        props.history.push('/');
    }

    const handleEdit = (e) => {
        e.preventDefault();
        let id = window.location.pathname.slice(9);

        window.location.pathname = '/edit/' + id;
    }

    const btns = (
        <div className="post-btns">
            <button className="edit-btn" onClick={handleEdit}>EDIT</button>
            <button className="delete-btn" onClick={handleDelete}>DELETE</button>
        </div>
    );

    const html = post.content.toString();

    const createMarkup = () => {
        return { __html: html };
    }

    return (
        <div className="post-wrap">
            <div className="post">
                <h3>{post.title}</h3>
                <p className="content" dangerouslySetInnerHTML={createMarkup()}></p>
                <div className="post-info">
                    <p>{post.author}</p>
                    <p className="post-date">{moment(post.date.toDate()).format('L')}</p>
                </div>
            </div>
            {
                (auth.uid) ? btns : null
            }
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id] : null;

    return {
        post,
        isLoading: !state.firestore.data.posts,
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (post) => dispatch(deletePost(post))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(Post);