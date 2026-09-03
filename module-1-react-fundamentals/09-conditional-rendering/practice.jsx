function CourseStatus({ completed }) {
  if (completed) {
    return <p>The course is completed.</p>;
  }

  return <p>The course is still in progress.</p>;
}

function ConditionalExample() {
  return (
    <div>
      <h2>9. Conditional Rendering</h2>
      <CourseStatus completed={false} />
    </div>
  );
}

const topicNineRoot = ReactDOM.createRoot(document.getElementById('topic-9'));
topicNineRoot.render(<ConditionalExample />);

