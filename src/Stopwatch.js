import React, { useState, useEffect } from "react";

function Stopwatch() {
  // Define state for the time and running state
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  // Timer ID
  let timer;

  // Effect to handle the timer when the stopwatch is running
  useEffect(() => {
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    // Cleanup effect
    return () => clearInterval(timer);
  }, [running]);

  // Function to handle start/stop behavior
  const handleStartStop = () => {
    setRunning(!running);
  };

  // Function to reset the timer
  const handleReset = () => {
    setTime(0);
    setRunning(false);
  };

  // Function to format the time in minutes and seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
        <p>Time: {formatTime(time)}</p>
        <button onClick={handleStartStop}>{running ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
