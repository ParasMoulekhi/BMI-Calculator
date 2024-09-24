import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // BMI calculate logic
  const calcBmi = (e) => {
    e.preventDefault();
    if (weight == 0 || height == 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 10000;
      setBmi(bmi.toFixed(1));
      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  // Reload logic
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form action="" onSubmit={calcBmi}>
          <div>
            <label>Weight(in kg)</label>
            <input
              type="text"
              name={weight}
              id="weight"
              placeholder="Enter weight value"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height(in cm)</label>
            <input
              type="text"
              name={height}
              id="height"
              placeholder="Enter height value"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button onClick={reload} className="btn btn-outline" type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi} </h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
