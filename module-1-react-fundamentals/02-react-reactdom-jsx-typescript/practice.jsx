// This is JSX. Babel converts it into React.createElement calls.
const topicTwoContent = (
  <div>
    <h2>2. React, ReactDOM, and JSX</h2>
    <p>JSX makes React elements easier to read and write.</p>
  </div>
);

const topicTwoRoot = ReactDOM.createRoot(document.getElementById('topic-2'));
topicTwoRoot.render(topicTwoContent);

