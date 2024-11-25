import './DataCard.css';
import DataCardDeetails from './DataCardDeetails';

function DataCard({humidity , windSpeed , pressure , seaLevel}) {
    return (
        <div className='data-card'>
            <DataCardDeetails icons="❄️" Deetails={humidity} name="Humidity"></DataCardDeetails>
            <DataCardDeetails icons="💨" Deetails={windSpeed} name="Wind Speed"></DataCardDeetails>
            <DataCardDeetails icons="🌪️" Deetails={pressure} name="pressure"></DataCardDeetails>
            <DataCardDeetails icons="🌨️" Deetails={seaLevel} name="Sea Level"></DataCardDeetails>
        </div>
    );
}

export default DataCard;