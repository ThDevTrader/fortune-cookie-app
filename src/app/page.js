"use client";
import { useState } from "react";

export default function Home() {
  const [currentState, setCurrentState] = useState("initial"); // 'initial', 'cracking', 'fortune'
  const [fortune, setFortune] = useState(""); // to set fortune phrases
  const [luckyNumbers, setLuckyNumbers] = useState([]); // to set lucky numbers

  const handleCrackCookie = () => {
    console.log("Cracking on click...");
    // Check console
  };

  const InitialState = () => (
    <div>
      <h1>Fortune Cookie</h1>
      <div>
        <span onClick={handleCrackCookie} style={{ cursor: "pointer" }}>
          🥠
        </span>
      </div>
      <p>Tap the cookie to crack it open!</p>
    </div>
  );

  const stateComponents = {
    initial: InitialState,
  };

  const renderPage = () => {
    const Component = stateComponents[currentState];
    return Component ? <Component /> : <div>Something went wrong</div>;
  };

  return (
    <div>
      <div>{renderPage()}</div>
    </div>
  );
}
