const courses = [
  { id: 1, name: 'React Fundamentals' },
  { id: 2, name: 'TypeScript Fundamentals' }
];

function CourseList() {
  return (
    <div>
      <h2>10. Lists and Keys</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

const topicTenRoot = ReactDOM.createRoot(document.getElementById('topic-10'));
topicTenRoot.render(<CourseList />);

