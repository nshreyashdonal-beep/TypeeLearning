import { useState } from "react";

function App() {
  const [page, setPage] = useState("landing");
  console.log(page);

  return (
    <>
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
  
     {page === "landing" && (
        <div className="page">
          <p>Landing page</p>
        </div>
      )}

      {page === "practice" && (
        <div className="page">
          <p>Practice page</p>
        </div>
      )}

      {page === "guide" && (
        <div className="page">
          <p>Finger guide page</p>
        </div>
      )}
    
            <footer>
        <p>Typee</p>
      </footer>
    </>
  );
}

export default App;