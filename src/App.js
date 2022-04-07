import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Button from "./Button";
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="App font-main">
      <Header name="Sara" title="Page 1" />
      <Link to="/page2">
        <Button />
      </Link>
    </div>
  );
}

export default App;
