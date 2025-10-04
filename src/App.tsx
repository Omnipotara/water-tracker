import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, updateCounter] = useState(() => {
    const storedCounter = parseInt(localStorage.getItem("waterCounter") || "0");
    return storedCounter;
  });

  useEffect(() => {
    localStorage.setItem("waterCounter", counter.toString());
  }, [counter]);

  var message;
  if (counter < 8) {
    message = <h1>{counter} / 8 cups of water drank today</h1>;
  } else {
    message = <h2>Bravo! You've reached your goal of 8 cups of water!</h2>;
  }

  return (
    <div className="app-container">
      <div
        className="water-fill"
        style={{ height: `${counter * 12.5}vh` }}
      ></div>

      <img
        src="/pngtree-sticker-of-a-cartoon-water-bottle-png-image_14957724.png"
        alt="water-bottle"
        className="water-image"
      />
      {message}
      <br />
      {counter < 8 ? (
        <button
          className="water-button"
          onClick={() => {
            updateCounter(counter + 1);
          }}
        >
          Drink a cup of water
        </button>
      ) : (
        <button
          className="water-button"
          onClick={() => {
            updateCounter(0);
          }}
        >
          Reset the counter
        </button>
      )}
    </div>
  );
}
export default App;
