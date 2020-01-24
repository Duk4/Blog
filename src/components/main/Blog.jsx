import React from 'react';
import PostSummary from '../posts/PostSummary';
import Pagination from '../posts/Pagination';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1
        }

        const getPage = localStorage.getItem('page');

        if (getPage) {
            this.state.currentPage = JSON.parse(getPage);
        };
    }

    componentDidMount() {
        const el = document.getElementById('scroll-into');
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    render() {
        const { posts, isLoading, postsPerPage } = this.props;
        const { currentPage } = this.state;

        if (isLoading) {
            return (
                <div className="loading">Loading...</div>
            );
        }

        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        let currentPosts;
        let totalPosts;
        let paginationRender;
        if (posts) {
            currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
            totalPosts = posts.length;
            const paginate = (e, pageNumber) => {
                e.preventDefault();
                this.setState({ currentPage: pageNumber });
                let pageState = JSON.stringify(pageNumber);
                localStorage.setItem('page', pageState);
            };
            paginationRender = (posts.length > 5) ? <Pagination totalPosts={totalPosts} postsPerPage={postsPerPage} paginate={paginate} /> : null;
        };

        return (
            <div className="blog">
                <Helmet>
                    <title>Blog - Dušan Tanasić</title>
                </Helmet>
                {
                    posts && currentPosts.map(post => {
                        return (
                            <Link to={'/article/' + post.id} key={post.id}>
                                <PostSummary post={post} />
                            </Link>
                        );
                    })
                }
                {paginationRender}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        posts: state.firestore.ordered ? state.firestore.ordered.posts : [],
        isLoading: !state.firestore.ordered,
        postsPerPage: 5
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts', orderBy: ['date', 'desc'] }
    ])
)(Blog);