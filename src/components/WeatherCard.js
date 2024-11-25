import './WeatherCard.css';

function WeatherCard({ temperature, cityName, iconCode }) {
  // Convert Kelvin to Celsius
  const celsius = (temperature - 273.15).toFixed(1);

  return (
    <div className="weather-card">
      <div className="weather-icon">
        {/* Render the weather icon dynamically */}
        {iconCode ? (
          <img
            src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
            alt="Weather Icon"
          />
        ) : (
          "☁️" // Fallback icon
        )}
      </div>
      <div className="temperature">{celsius}°C</div>
      <div className="location">{cityName}</div>
    </div>
  );
}

export default WeatherCard;
