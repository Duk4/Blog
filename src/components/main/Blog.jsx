import React from 'react';
import PostSummary from '../posts/PostSummary';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Blog extends React.Component {
    render() {
        const { posts, isLoading } = this.props;
        console.log(this.props);
        console.log(posts);

        if (isLoading) {
            return (
                <div className="blog">Loading...</div>
            );
        }

        return (
            <div className="blog">
                {
                    posts && posts.map(post => {
                        return <PostSummary key={post.id} post={post} />
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
        { collection: 'posts' }
    ])
)(Blog);