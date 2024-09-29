import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

//JSX is "HTML like"/"XML like" syntax => Parcel => Transpiled by Babel =>  React.createElement => JS Object => HTMLElement(render)

/**
 ** React Components
 * 1. Class Based Components
 * 2. Functional Components
 */
const JsxHeading = () => <h1 id="headingJSX">This is using JSX</h1>;
const abc = <h1>lol</h1>;

//Component Composition
const FunctionalHeading = () => (
  <div>
    <h1>Namaste React by Functional Component</h1>
    {abc}
    <JsxHeading />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalHeading />);
