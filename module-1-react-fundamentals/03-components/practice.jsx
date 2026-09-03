function TopicTitle() {
  return <h2>3. Components</h2>;
}

function WelcomeMessage() {
  return <p>A component is a reusable part of the user interface.</p>;
}

function ComponentsExample() {
  return (
    <div>
      <TopicTitle />
      <WelcomeMessage />
    </div>
  );
}

const topicThreeRoot = ReactDOM.createRoot(document.getElementById('topic-3'));
topicThreeRoot.render(<ComponentsExample />);

