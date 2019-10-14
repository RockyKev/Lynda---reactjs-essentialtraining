import React, { Component } from "react";
import { render } from "react-dom";

var style = {
  backgroundColor: "orange",
  color: "white",
  fontFamily: "Arial"
};

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
};

class SkiDayCounter extends Component {
  getPercent = decimal => {
    return decimal * 100 + "%";
  };

  calcGoalProgress = (total, goal) => {
    return this.getPercent(total / goal);
  };

  render() {
    const { total, powder, backcountry, goal } = this.props;
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
          <p> Goals Progress: {this.calcGoalProgress(total, goal)} </p>
        </div>
      </section>
    );
  }
}

render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}
  />,
  document.getElementById("root")
);

// class Message extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1 style={{ color: this.props.color }}>
//           {" "}
//           {this.props.msg} You're at like {this.props.age} years old!
//         </h1>
//         <p> I'll check back in {this.props.minutes} minutes </p>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Message age={50} color="blue" msg="How are you?" minutes={100} />,
//   document.getElementById("root")
// );
