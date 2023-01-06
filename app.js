import React from "react";
import ReactDOM from "react-dom/client";

// Question 1 :- Create a Nested header Element using React.createElement (h1,h2,h3,inside div with class title)?
const heading1 = React.createElement(
  "h1",
  { id: "head1", key: "h1" },
  "First Heading with parcel"
);

const heading2 = React.createElement(
  "h2",
  { id: "head2", key: "h2" },
  "Second heading"
);

const heading3 = React.createElement(
  "h3",
  { id: "head3", key: "h3" },
  "Second heading"
);

const container = React.createElement("div", { className: "title" }, [
  heading1,
  heading2,
  heading3,
]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);

// Question 2 :- Create a Nested header Element using JSX (h1,h2,h3,inside div with class title)?

const jsxh1 = (
  <h1 id="head1" key="h1">
    Heading1
  </h1>
);
const jsxh2 = (
  <h2 id="head2" key="h2">
    Heading2
  </h2>
);
const jsxh3 = (
  <h3 id="head3" key="h3">
    Heading3
  </h3>
);

const JsxDiv = () => {
  return (
    <div>
      {jsxh1}
      {jsxh2}
      {jsxh3}
    </div>
  );
};

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<JsxDiv />);

//  Question 3 :- Create a header component from scratch using functional component with JSX 1 - add logo on left 2- search bar in middle
//   3- add user icon in right 4- add css to look good ?

const logo = (
  <div>
    <img className="logo" src="./assets/reactLogo.jpg" alt="react logo" />
  </div>
);

const searchBar = (
  <div>
    <input className="searchBar" type="text" placeholder="Type for search" />
  </div>
);

const userIcon = (
  <div>
    <img className="icon" src="./assets/userIcon.jpg" alt="user icon"/>
  </div>
);

const HeaderComponent = () => {
  return (
    <div className="headerContainer">
      {logo},{searchBar},{userIcon}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
