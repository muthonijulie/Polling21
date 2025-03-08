import React, { useEffect, useState } from "react";
import { socket } from "./socket";
import PollingQuiz from "./components/PollingQuiz";
import PollingList from "./components/PollingList";
import PollingChart from "./components/PollingChart";
import "./App.css";

function App() {
  const [poll, setPoll] = useState({ question: "", options: [], votes: {} });

  useEffect(() => {
    socket.on("pollData", (data) => setPoll(data));
    return () => socket.off("pollData");
  }, []);

  const vote = (option) => {
    socket.emit("vote", option);
  };

  return (
    <div className="app-container">
      <PollingQuiz question={poll.question} />
      <PollingList options={poll.options} vote={vote} />
      <PollingChart pollData={poll.votes} />
    </div>
  );
}

export default App;

