import React from 'react'
const Country = ({ country }) => {
    if (!country) {
      return null
    }
    if (country.length === 0) {
        return (
            <div>
            not found...
            </div>
        )
    }
    const objectCountry = country[0]
    return (
    <div>
        <h3>{objectCountry.name} </h3>
        <div>capital {objectCountry.capital} </div>
        <div>population {objectCountry.population}</div>
        <img src={objectCountry.flag} height='100' alt={`flag of ${objectCountry.name}`}/>
    </div>
    )
  }
  export default Country