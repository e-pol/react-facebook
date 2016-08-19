/**
 *@class Comment
 */
import React from 'react';
//import Remarkable from 'remarkable';

export default React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});
