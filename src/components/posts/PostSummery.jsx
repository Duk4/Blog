import React from 'react';

const PostSummary = ({ post }) => {

    console.log(post);

    return (
        <div className="post-summary">
            {/* <h4>{post.title}</h4>
            <p className="summary">
                {post.content}
            </p>
            <div className="summary-info">
                <p>{post.author}</p>
                <p className="post-date">{post.date}</p>
            </div> */}
        </div>
    );
}

export default PostSummary;