function Total({ price, quantity }) {
  // This is a pure calculation.
  const total = price * quantity;

  return <p>Total: ${total}</p>;
}

function PurityExample() {
  return (
    <div>
      <h2>8. Purity, Render, and Commit</h2>
      <Total price={10} quantity={3} />
    </div>
  );
}

const topicEightRoot = ReactDOM.createRoot(document.getElementById('topic-8'));
topicEightRoot.render(
  <React.StrictMode>
    <PurityExample />
  </React.StrictMode>
);

