import { useState } from "react";
import Nav from "./component/Nav";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
    </>
  );
}

export default App;
