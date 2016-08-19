import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './js/comment_box'

function setRootElement() {
  var
    elemId = 'content',
    elem = document.getElementById(elemId);

  if (!elem) {
      elem = document.createElement('div');
      elem.id = elemId;
  }

  document.body.appendChild(elem);
}

function render(Component) {
  ReactDOM.render(
    <Component />,
    document.getElementById('content')
  );
}

setRootElement();
render(CommentBox);

if (module.hot) {
  module.hot.accept(); // accept itself
  var NextApp = require('./js/comment_box').default; // require next version of MyApp
  render(NextApp); // render it into DOM
}
