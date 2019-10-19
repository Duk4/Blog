import React from 'react';
import moment from 'moment';

const PostSummary = ({ post }) => {
    const summary = (post.content).slice(0, 150) + '...';

    function createMarkup() {
        return { __html: summary.toString() };
    }

    return (
        <div className="post-summary">
            <h4>{post.title}</h4>
            <p className="summary" dangerouslySetInnerHTML={createMarkup()}></p>
            <div className="summary-info">
                <p>{post.author}</p>
                <p className="post-date">{moment(post.date.toDate()).format('L')}</p>
            </div>
        </div>
    );
}

export default PostSummary;