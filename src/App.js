import "./App.css";
import Header from "./Header";
import Button from "./Button";
import Counter from "./Counter"
import { Link } from "react-router-dom";


function App() {

  return (
    <div className="App font-main">
      <Header name="Sara" title="Page 1" />
      <Counter />
      <Link to="/page2">
        <Button />
      </Link>
    </div>
  );
}

export default App;
