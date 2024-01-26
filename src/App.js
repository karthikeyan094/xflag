import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
    console.log(countries);
  }, []);

  return (
    <div className="wrapper">
      {countries.map((country) => (
        <div key={country.cca3} className="card">
          <img className="img" src={country.flags.png} alt={`Flag of ${country.name.common}`} />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
