import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch(`https://restcountries.com/v3.1/all#`)
            .then(response => response.json())
            .then(data => setCountries(data))
            .catch(error => console.log(error))
    },[]);
    return (
        <div>
            <h2>Countries {countries.length}</h2>
            <div className="countries">
            {
                countries.map(eachCountry => <Country key={countries.cca3} country={eachCountry}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;