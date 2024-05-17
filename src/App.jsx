import airHumidity from "../assets/airHumidity.png";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="location">Hamburg</h1>
      <div className="temperature">25</div>
      <div className="temp-minmax">H:25 T:15</div>
      <div className="wind-speed">SW: 10 km/h</div>
      <div className="air-humidity">
        <img src={airHumidity} alt="Air Humidity" />
        50%
      </div>
    </>
  );
}

export default App;
