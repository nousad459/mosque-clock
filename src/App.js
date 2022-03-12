import React, { useState, useEffect, useCallback } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCount((oldCount) => oldCount + 1), 1000);
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(timezone);

    return () => {
      clearInterval(id);
    };
  }, []);
  // console.log(">>", count);
  const date = new Date();
  return (
    <div className="App">
      <header className="header">
        <label>ليلى الله محمد رسول الله</label>
      </header>
      <hr />
      <hr />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 20
        }}
      >
        <div className="grid-border">
          dsggdsgdsgsdgsdgdfgfg dsggdsgdsgsdgsdgdfgfgsgsd gsdgdsg gsdgdsgsg
        </div>
        <div className="grid-border">
          {date.toLocaleString("en-US", { timezone: "America/New_York" })}
        </div>
        <div className="grid-border">Column 3</div>
      </div>
    </div>
  );
}
