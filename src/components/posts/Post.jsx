import React from "react";
import moment from 'moment';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const Post = ({ post, isLoading }) => {
    if (isLoading) {
        return (
            <div className="post-loading">Loading post...</div>
        );
    }

    return (
        <div className="post-wrap">
            <div className="post">
                <h3>{post.title}</h3>
                <p className="content">
                    {post.content}
                </p>
                <div className="post-info">
                    <p>{post.author}</p>
                    <p className="post-date">{moment(post.date.toDate()).format('L')}</p>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id] : null;

    return {
        post,
        isLoading: !state.firestore.data.posts
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(Post);