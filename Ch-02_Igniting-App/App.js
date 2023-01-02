import React from 'react';
import ReactDOM from 'react-dom/client';

let i=0;
function changeBg(){
  const bgcolor = ['#D7BDE2', '#F4D03F','#F5B7B1','#A9DFBF','#CCD1D1'];
  document.getElementById('root').style.backgroundColor = bgcolor[i];
  i++;
  if(i>bgcolor.length-1)
    i=0;
}

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
  setInterval(changeBg,2000);