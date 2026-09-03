# Purity, Render, and Commit

## What this topic is about

A pure component returns the same JSX when it receives the same inputs.

During render, React calls the component and calculates what should appear. During commit, React applies the required changes to the browser DOM.

A component should not change external variables while it renders. Strict Mode helps reveal impure code during development.

