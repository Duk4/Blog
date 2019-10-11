import React from 'react';
import moment from 'moment';

const PostSummary = ({ post }) => {
    const summary = (post.content).slice(0, 200) + '...';

    return (
        <div className="post-summary">
            <h4>{post.title}</h4>
            <p className="summary">
                {summary}
            </p>
            <div className="summary-info">
                <p>{post.author}</p>
                <p className="post-date">{moment(post.date.toDate()).format('LL')}</p>
            </div>
        </div>
    );
}

export default PostSummary;