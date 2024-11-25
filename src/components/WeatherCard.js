import './WeatherCard.css';

function WeatherCard() {
    return (
        <div class="weather-card">
    <div class="weather-icon">
      ☁️
    </div>
    <div class="temperature">26°C</div>
    <div class="location">New York, USA.</div>
  </div>
    );
}

export default WeatherCard;