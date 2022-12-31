import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement(
    "h1",
    {
      id: "heading1",
      key: "1",
    },
    "Namaste React 🙏"
  );
  const heading2 = React.createElement(
    "h2",
    {
      id: "heading2",
      key: "2",
    },
    "Let me learn react 🙂"
  );
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading1, heading2]
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);