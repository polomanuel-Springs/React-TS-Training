function Card({ children }) {
  return <div>{children}</div>;
}

function CompositionExample() {
  return (
    <div>
      <h2>6. Children and Composition</h2>
      <Card>
        <h3>React Training</h3>
        <p>This content is received through the children prop.</p>
      </Card>
    </div>
  );
}

const topicSixRoot = ReactDOM.createRoot(document.getElementById('topic-6'));
topicSixRoot.render(<CompositionExample />);

