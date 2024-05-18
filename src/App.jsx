import airHumidity from "../assets/airHumidity.png";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="location">Hamburg</h1>
      <div className="temperature">25</div>
      <div className="temp-minmax">H:25 T:15</div>
      <div className="wind-speed">SW: 10 km/h</div>
      <div className="air-humidity">
        <img src={airHumidity} alt="Air Humidity" />
        50%
      </div>
      <div className="footer">
        <div className="geo-location">
          Geo-Location
        </div>
        <div className="locations">
          All-Locations
        </div>
        <div className="burger-menu">
          Burger-Menu
        </div>
      </div>
    </div>
  );
}

export default App;
