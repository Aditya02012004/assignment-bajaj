"use client";

import { useState, useEffect } from "react";
import BfhlForm from "@/components/BfhlForm";
import ResponseDisplay from "@/components/ResponseDisplay";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const [response, setResponse] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <header>
        <h1>Bajaj Challenge</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>
      <main>
        <BfhlForm setResponse={setResponse} />
        {response && <ResponseDisplay response={response} />}
      </main>
    </div>
  );
}