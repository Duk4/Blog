import React from 'react';

const PostSummary = () => {
    return (
        <div className="post-summary">
            <h4>Title</h4>
            <p className="summary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et erat feugiat, elementum ex eget, iaculis ex. Quisque tincidunt, purus eu mattis imperdiet, ex enim aliquet magna, vel accumsan erat ligula viverra odio.
            </p>
            <div className="summary-info">
                <p>Dušan Tanasić</p>
                <p className="post-date">11.09.2019.</p>
            </div>
        </div>
    );
}

export default PostSummary;