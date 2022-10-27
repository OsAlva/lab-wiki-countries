import {Link} from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
        <div className="list-group">
        {countries.map((country) => {
               return (
                    <div className="list-group-item list-group-item-action" key={country.alpha3Code}>
                        <h3>{country.name.common}</h3>
                        <p>{country.alpha2Code} {country.name.common}</p>
                        <img src={"https://flagpedia.net/data/flags/icon/72x54/"+country.alpha2Code.toLowerCase()+".png"} alt={country.name.common} style={{width: '60px'}}/>
                        <Link to={`/${country.alpha3Code}`}> Detalls del pais </Link>
                    </div>
      
               );
           })}
        </div>
    </div>
  );
}

export default CountriesList;
