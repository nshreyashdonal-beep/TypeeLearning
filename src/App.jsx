import { useState } from "react";

function App() {
  const [page, setPage] = useState("landing");
  console.log(page);

  return (
    <nav>
      <button className="logo" onClick={() => setPage("landing")}>
        Typee
      </button>
      <div className="nav-links">
        <button
          className={page === "landing" ? "active" : ""}
          onClick={() => setPage("landing")}
        >
          Home
        </button>
        <button
          className={page === "practice" ? "active" : ""}
          onClick={() => setPage("practice")}
        >
          Practice
        </button>
        <button
          className={page === "guide" ? "active" : ""}
          onClick={() => setPage("guide")}
        >
          Finger guide
        </button>
      </div>
    </nav>
  );
}

export default App;