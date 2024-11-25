import './Forecast.css';
import ForecastData from './ForecastData';

function Forecast() {
    return (
        <div className='forecast'>
            <h2>5 Day Forecast:</h2>
            <div className='forecast_5day_data'>
                <ForecastData icon = "☀️" temprature = "26°C" date = "Friday,1 Sep"></ForecastData>
                <ForecastData icon = "🌤️" temprature = "24°C" date = "Saturday, 2 Sep"></ForecastData>
                <ForecastData icon = "🌥️" temprature = "23°C" date = "Sunday, 3 Sep"></ForecastData>
                <ForecastData icon = "🌦️" temprature = "22°C" date = "Monday, 4 Sep"></ForecastData>
                <ForecastData icon = "🌧️" temprature = "21°C" date = "Tuesday, 5 Sep"></ForecastData>
            </div>
        </div>
    );
}

export default Forecast;