"use client";
import { useState } from "react";
import { generateLuckyNumbers } from "@/utils/generateLuckyNumbers";
import { getFortune } from "@/utils/getFortune";

export default function Home() {
  const [currentState, setCurrentState] = useState("initial"); // 'initial', 'cracking', 'fortune'
  const [fortune, setFortune] = useState("");
  const [luckyNumbers, setLuckyNumbers] = useState([]);

  const handleCrackCookie = () => {
    setCurrentState("cracking");

    // to generate the cookie breaking time
    setTimeout(() => {
      const randomFortune = getFortune();
      const numbers = generateLuckyNumbers();

      setFortune(randomFortune);
      setLuckyNumbers(numbers);
      setCurrentState("fortune");
    }, 2000);
  };

  const handleNewCookie = () => {
    setCurrentState("initial");
    setFortune("");
    setLuckyNumbers([]);
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

  const CrackingState = () => (
    <div>
      <h2>Cracking open your fortune...</h2>
    </div>
  );

  const FortuneState = () => {
    return (
      <div>
        <h2>Your Fortune</h2>
        <p>{fortune}</p>
        <div>
          <p>Your Lucky Numbers</p>
          <div>
            <span>{luckyNumbers[0] + " "}</span>
            <span>{luckyNumbers[1] + " "}</span>
            <span>{luckyNumbers[2] + " "}</span>
            <span>{luckyNumbers[3] + " "}</span>
            <span>{luckyNumbers[4] + " "}</span>
            <span>{luckyNumbers[5]}</span>
          </div>
        </div>
        <button onClick={handleNewCookie} style={{ cursor: "pointer" }}>
          Get Another Fortune
        </button>
      </div>
    );
  };

  const stateComponents = {
    initial: InitialState,
    cracking: CrackingState,
    fortune: FortuneState,
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
