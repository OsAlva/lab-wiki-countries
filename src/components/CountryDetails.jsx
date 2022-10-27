import { useParams } from 'react-router-dom';

function CountryDetails({countries}) {

    const {countryCode} = useParams();

    console.log("COUNTRYCODE",countryCode)

    const country = countries.find(project => project.alpha3Code === countryCode)
    console.log("COUNTRY", country);

   return (
         <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>   
                    <tr>
                        <td>Area</td>
                        <td>{country.area} km
                            <sup>2</sup>
                        </td>   
                    </tr>
                    
                </tbody>
            </table>
        </div>
   );
}

export default CountryDetails;