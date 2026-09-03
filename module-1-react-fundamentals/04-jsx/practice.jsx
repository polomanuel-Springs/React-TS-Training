const studentName = 'Manuel';
const completedTopics = 4;

function JsxExample() {
  return (
    <div>
      <h2>4. JSX</h2>
      <p>Student: {studentName}</p>
      <p>Completed topics: {completedTopics}</p>
    </div>
  );
}

const topicFourRoot = ReactDOM.createRoot(document.getElementById('topic-4'));
topicFourRoot.render(<JsxExample />);

