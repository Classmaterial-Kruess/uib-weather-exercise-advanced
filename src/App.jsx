import airHumidity from "../assets/airHumidity.png";
import "./App.css";

const API_KEY = import.meta.env.VITE_BASE_URL;
const API = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Hamburg`;

console.log(API);

function App() {
  return (
    <div className="container">
      <h1 className="location">nnn</h1>
      <div className="temperature">50</div>
      <div className="temp-minmax">100 - 0</div>
      <div className="wind-speed">SW: 10 km/h</div>
      <div className="air-humidity">
        <img src={airHumidity} alt="Air Humidity" />
        50%
      </div>
      <div className="footer">
        <div className="geo-location">Geo-Location</div>
        <div className="locations">.......</div>
        <div className="burger-menu">Burger-Menu</div>
      </div>
    </div>
  );
}

export default App;
