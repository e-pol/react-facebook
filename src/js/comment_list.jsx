/**
 *@class CommentList
 */
import React from 'react';
import Comment from './comment';

 export default React.createClass({
   render: function() {
     return (
       <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
       </div>
     );
   }
 });
