import React, { Component } from "react";
import { render } from "react-dom";

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
};

const getPercent = decimal => {
  return decimal * 100 + "%";
};

const calcGoalProgress = (total, goal) => {
  return getPercent(total / goal);
};

const SkiDayCounter = ({ total, powder, backcountry, goal }) => {
  return (
    <section>
      <h1>Ski Days</h1>
      <div>
        <p> Total Days: {total} </p>
      </div>

      <div>
        <p> Powder Days: {powder} </p>
      </div>

      <div>
        <p> BackCountry Days: {backcountry} </p>
      </div>

      <div>
        <p> Goals Progress: {calcGoalProgress(total, goal)} </p>
      </div>
    </section>
  );
};

render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}
  />,
  document.getElementById("root")
);
