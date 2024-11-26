import './DataCard.css';
import DataCardDeetails from './DataCardDeetails';

function DataCard({humidity , windSpeed , pressure , seaLevel}) {
    return (
        <div className='data-card'>
            <DataCardDeetails icons={<img src='../humidity.png' alt='humidity.png'/>} Deetails={humidity} name="Humidity"></DataCardDeetails>
            <DataCardDeetails icons={<img src='../windy.png' alt='windy.png'/>} Deetails={windSpeed} name="Wind Speed"></DataCardDeetails>
            <DataCardDeetails icons={<img src='../air.png' alt='air.png'/>} Deetails={pressure} name="pressure"></DataCardDeetails>
            <DataCardDeetails icons={<img src='../sea-level.png' alt='sea-level.png'/>} Deetails={seaLevel} name="Sea Level"></DataCardDeetails>
        </div>
    );
}

export default DataCard;