function Student({ name, course }) {
  return <p>{name} is studying {course}.</p>;
}

function PropsExample() {
  return (
    <div>
      <h2>5. Props</h2>
      <Student name="Manuel" course="React" />
    </div>
  );
}

const topicFiveRoot = ReactDOM.createRoot(document.getElementById('topic-5'));
topicFiveRoot.render(<PropsExample />);

