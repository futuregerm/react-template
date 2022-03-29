import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [serverResponse, setServerResponse] = useState("...");
  const handleClick = () => {
    axios.get("/contact-server").then((res) => {
      setServerResponse(res.data);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Contact Server</button>
        <h1>{serverResponse}</h1>
      </header>
    </div>
  );
}

export default App;
