import React from 'react';
import PostSummary from '../posts/PostSummary';
import Pagination from '../posts/Pagination';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1
        }

        const getPage = localStorage.getItem('page');
        console.log(getPage);
        if (getPage) {
            this.state.currentPage = JSON.parse(getPage);
        };
    }

    render() {
        const { posts, isLoading, postsPerPage } = this.props;
        const { currentPage } = this.state;
        console.log(this.state)

        if (isLoading) {
            return (
                <div className="loading">Loading...</div>
            );
        }

        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        let currentPosts;
        let totalPosts;
        if (posts) {
            currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
            totalPosts = posts.length;
        };

        const paginate = (e, pageNumber) => {
            e.preventDefault();
            this.setState({ currentPage: pageNumber });
            let pageState = JSON.stringify(pageNumber);
            localStorage.setItem('page', pageState);
        };

        return (
            <div className="blog">
                {
                    posts && currentPosts.map(post => {
                        return (
                            <Link to={'/article/' + post.id} key={post.id}>
                                <PostSummary post={post} />
                            </Link>
                        );
                    })
                }
                <Pagination totalPosts={totalPosts} postsPerPage={postsPerPage} paginate={paginate} />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        posts: state.firestore.ordered ? state.firestore.ordered.posts : [],
        isLoading: !state.firestore.ordered,
        postsPerPage: 3
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts', orderBy: ['date', 'desc'] }
    ])
)(Blog);