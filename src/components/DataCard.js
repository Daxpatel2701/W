import './DataCard.css';
import DataCardDeetails from './DataCardDeetails';

function DataCard() {
    return (
        <div className='data-card'>
            <DataCardDeetails icons="❄️" Deetails="25%" name="Humidity"></DataCardDeetails>
            <DataCardDeetails icons="💨" Deetails="2km/h" name="Wind Speed"></DataCardDeetails>
            <DataCardDeetails icons="🌪️" Deetails="997hpa" name="pressure"></DataCardDeetails>
            <DataCardDeetails icons="🌨️" Deetails="8" name="UV"></DataCardDeetails>
        </div>
    );
}

export default DataCard;