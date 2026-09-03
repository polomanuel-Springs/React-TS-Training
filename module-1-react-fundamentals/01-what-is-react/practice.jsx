// React creates an h2 element.
const title = React.createElement('h2', null, '1. What Is React?');

// React creates a paragraph element.
const description = React.createElement(
  'p',
  null,
  'React is a JavaScript library for building user interfaces.'
);

// React groups both elements inside a div.
const content = React.createElement('div', null, title, description);

// ReactDOM displays the React content inside the HTML element.
const topicOneRoot = ReactDOM.createRoot(document.getElementById('topic-1'));
topicOneRoot.render(content);

