import './CountryTime.css';

function CountryTime() {
    const country = "India"
    const time = "23:15";
    const date = "Thursday,31 Aug"
    return (
        <div className='country_time_date'>
            <p className='country'>{country}</p>
            <h1 className='time'>{time}</h1>
            <p className='date'>{date}</p>
        </div>
    );
}

export default CountryTime;