import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <form role="search">
      <input
        type="search"
        aria-label="Search for a city"
        placeholder="London"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button type="button">Search</button>
    </form>
  );
}

export default App;
