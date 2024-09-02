/* import React from "react";
import ReactDOM from "react-dom/client";

//react-element
const jxsheading = <h1 id="heading">welcome to hello world</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jxsheading);

//react component
//class based compoenent

const number = 688;
//functional componenet
const HeadingCompoenent = () => {
  return <h1>namasthe react functional compoenent</h1>;
}; // js function which return react element

const fn = () => {
  return (
    <div>
      {HeadingCompoenent()}
      {number}
      <h1>{78 + 78}</h1>
      <h1 className=" head">hiiii</h1>
      <HeadingCompoenent />
    </div>
  );
};
const fn2 = () => {
  return true;
};

export default fn;

//react.createElement=>object=>htmlelement(render)
/* const heading = React.createElement("h1", { id: "heading" }, "monica");
console.log(heading);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading); */
