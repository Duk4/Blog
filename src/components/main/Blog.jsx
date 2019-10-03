import React from 'react';
import PostSummary from '../posts/PostSummery';

const Blog = () => {
    return (
        <div className="blog">
            <PostSummary />
            <PostSummary />
            <PostSummary />
        </div>
    );
};

export default Blog;