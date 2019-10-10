import React from 'react';
import PostSummary from '../posts/PostSummery';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Blog extends React.Component {
    render() {
        const { posts } = this.props;
        console.log(this.props);

        return (
            <div className="blog">
                {
                    posts && posts.map(post => {
                        return <PostSummary key={post.id} post={post} />
                    })
                }
                <PostSummary />
                <PostSummary />
                <PostSummary />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        posts: state.firestore.ordered.posts
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(Blog);