"use client";
import { useState } from "react";
import { generateLuckyNumbers } from "@/utils/generateLuckyNumbers";
import { getFortune } from "@/utils/getFortune";

export default function Home() {
  const [currentState, setCurrentState] = useState("initial");
  const [fortune, setFortune] = useState("");
  const [luckyNumbers, setLuckyNumbers] = useState([]);

  const handleCrackCookie = () => {
    setCurrentState("cracking");

    setTimeout(async () => {
      const randomFortune = await getFortune();
      const numbers = await generateLuckyNumbers();

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-8">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="absolute -top-4 -left-4 text-yellow-400 text-2xl animate-pulse">
            ✨
          </div>
          <div className="absolute -top-2 -right-6 text-orange-400 text-lg animate-bounce">
            ⭐
          </div>
          <div className="absolute -bottom-2 left-2 text-yellow-300 text-xl animate-pulse">
            ✨
          </div>
        </div>

        <div className="relative my-12">
          <div
            onClick={handleCrackCookie}
            className="cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <div className="w-48 h-32 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg relative mx-auto">
              <div className="absolute inset-2 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full shadow-inner"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-8 bg-yellow-600 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>

        <h1 className="text-6xl font-bold text-orange-600 mb-4 font-serif tracking-wide">
          Fortune Cookie
        </h1>

        <p className="text-xl text-orange-700 font-medium">
          Tap the cookie to crack it open!
        </p>

        <div className="relative">
          <div className="absolute top-4 right-4 text-yellow-400 text-lg animate-pulse">
            ✨
          </div>
          <div className="absolute bottom-2 -left-2 text-orange-400 text-xl animate-bounce">
            ⭐
          </div>
        </div>

        <div className="mt-8 bg-yellow-200 bg-opacity-50 px-6 py-3 rounded-full border border-yellow-300">
          <span className="text-orange-600 font-semibold">
            ✨ Magic awaits inside ✨
          </span>
        </div>
      </div>
    </div>
  );

  const CrackingState = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-8">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="flex items-center justify-center space-x-12">
            <div className="inset-2 w-24 h-32 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-l-full shadow-lg transform -rotate-20 animate-pulse"></div>
            <div className="inset-2 w-24 h-32 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-r-full shadow-lg transform rotate-12 animate-pulse"></div>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-orange-600 font-serif">
          Cracking open your fortune...
        </h2>

        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );

  const FortuneState = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-8">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 border border-orange-200">
          <div className="text-center mb-6">
            <div className="relative">
              <div className="absolute -top-2 -left-2 text-yellow-400 text-lg">
                ✨
              </div>
              <div className="absolute -top-1 -right-3 text-orange-400 text-sm">
                ⭐
              </div>
              <div className="text-4xl mb-2">🔮</div>
              <div className="absolute -bottom-1 left-1 text-yellow-300 text-sm">
                ✨
              </div>
            </div>
            <h2 className="text-3xl font-bold text-orange-600 font-serif">
              Your Fortune
            </h2>
          </div>

          <div className="mb-8">
            <p className="text-gray-700 text-lg italic text-center leading-relaxed font-medium">
              {fortune}
            </p>
          </div>

          <div className="mb-8">
            <p className="text-orange-600 font-semibold text-center mb-4 text-lg">
              Your Lucky Numbers
            </p>
            <div className="flex justify-center space-x-2">
              {luckyNumbers.map((number, index) => (
                <span
                  key={index}
                  className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg"
                >
                  {number}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleNewCookie}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out flex items-center justify-center mx-auto space-x-2"
            >
              <span>🔄</span>
              <span>Get Another Fortune</span>
            </button>
          </div>
        </div>
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
