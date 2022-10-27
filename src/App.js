
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
//import projectsData from './countries.json'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function App() {

  const [countries, setCountries] = useState([]);
  const [esperant, setEsperant] = useState(true);


  useEffect(()=>{
    axios.get(apiURL)
    .then(results=>{
        console.log(results.data);
        setCountries(results.data);
        setTimeout(()=> {
            setEsperant(false);
        }, 2000);
    })
}, []);


  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          {/* React-Router Route rendering the CountryDetails should go here */}
          <Routes>
            <Route path="/:countryCode" element={<CountryDetails countries={countries}/>} />
          </Routes>
        </div>
      </div>
  </div>
  );
}

export default App;
