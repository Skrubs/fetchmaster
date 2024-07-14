import React, { useEffect, useState } from 'react';
import './App.css';

const CountriesList = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
       fetch('https://restcountries.com/v3.1/all')
           .then(res =>{
               if(!res.ok){
                   throw new Error("Network response was not successful");
               }
               return res.json();
           })
           .then(data =>{
               console.log('Data received: ', data);
           })
           .catch(err =>{
               console.log(err.message);
           });
    }, []);

    return (
        <div className="div_1">
            <div>
                <h1>List of Countries</h1>
                <ul>
                    {countries.map((country, index) => (
                        <li key={index}>{country.name.common}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h1>Countries Populations</h1>
                 <ul>
                {countries.map((country, index) => (
                    <li key={index}>{country.name.common}</li>
                ))}
            </ul>
             </div>
        </div>
    );
};

export default CountriesList;
