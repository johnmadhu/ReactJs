const heading = React.createElement(
  "h1",
  { id: "header", xyz: "abc" },
  "Hello React World!"
);
const root = ReactDOM.createRoot(document.getElementById("header2"));
root.render(heading);
