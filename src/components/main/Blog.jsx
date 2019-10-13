import React from 'react';
import PostSummary from '../posts/PostSummary';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

class Blog extends React.Component {
    render() {
        const { posts, isLoading } = this.props;

        if (isLoading) {
            return (
                <div className="blog-loading">Loading...</div>
            );
        }

        return (
            <div className="blog">
                {
                    posts && posts.map(post => {
                        return (
                            <Link to={'/article/' + post.id} key={post.id}>
                                <PostSummary post={post} />
                            </Link>
                        );
                    })
                }
            </div>
        );

    };
};

const mapStateToProps = (state) => {
    return {
        posts: state.firestore.ordered ? state.firestore.ordered.posts : [],
        isLoading: !state.firestore.ordered
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts', orderBy: ['date', 'desc'] }
    ])
)(Blog);