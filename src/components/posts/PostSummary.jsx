import React from 'react';
import moment from 'moment';

const PostSummary = ({ post }) => {
    console.log(post.date);

    return (
        <div className="post-summary">
            <h4>{post.title}</h4>
            <p className="summary">
                {post.content}
            </p>
            <div className="summary-info">
                <p>{post.author}</p>
                <p className="post-date">{moment(post.date.toDate()).format('l')}</p>
            </div>
        </div>
    );
}

export default PostSummary;