import React from "react";

function PollingList({ options, vote }) {
  return (
    <div className="poll-list">
      {options.map((option, index) => (
        <button key={index} onClick={() => vote(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default PollingList;
