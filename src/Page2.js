import "./App.css";
import Header from "./Header";
import Button from "./Button";
import { Link } from "react-router-dom";

function Page2() {

  return (
    <div className="App font-main">
      <Header name="Sara" title="Page 2" />
      <Link to="/">
        <Button />
      </Link>
    </div>
  );
}

export default Page2;
