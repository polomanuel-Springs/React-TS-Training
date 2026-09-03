function Course({ courseValue }) {
  return <p>The child received this course: {courseValue}</p>;
}

function DataFlowExample() {
  const courseName = 'React Fundamentals';

  return (
    <div>
      <h2>7. One-Way Data Flow</h2>
      <p>The parent owns the course name.</p>
      <Course courseValue={courseName} />
    </div>
  );
}

const topicSevenRoot = ReactDOM.createRoot(document.getElementById('topic-7'));
topicSevenRoot.render(<DataFlowExample />);

