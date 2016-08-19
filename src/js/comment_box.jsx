/**
 *@class CommentBox
 */
import React from 'react';
import CommentList from './comment_list';
import CommentForm from './comment_form';

export default React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});
