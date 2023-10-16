const Country = ({ country }) => {
    console.log(country)
  const { name, flags, capital, area} = country;
  return (
    <div style={{width: '300px'}} className="countries">
      <div style={{border:'1px solid', padding: '12px'}}>
        <img style={{width: '250px', height: '130px'}} src={flags.png} alt="" />
        <h3>Name :- {name.common}</h3>
        <p>Official :- {name.official}</p>
        <p>Capital :- {capital}</p>
        <p>Area :- {area}</p>
        <p>Population :- {country.population}</p>
        <p>unMember :- {country.unMember? 'Yes' : 'No'}</p>
        <p>Is independent :- {country.independent? 'Yes' : 'No'}</p>
        <p>Is land locked :- {country.landlocked? 'Yes' : 'No'}</p>
        <p>Start of week :- {country.startOfWeek}</p>
        <p>Time zone :- {country.timezones}</p>
        <p>Coat of arms :- <img style={{width:'40px'}} src={country.coatOfArms.png? country.coatOfArms.png : 'Nothings'} alt="No coat" /></p>
        <p>Status :- {country.status}</p>
        <button><a href={country.maps.googleMaps}>Google map</a></button>
      </div>
    </div>
  );
};

export default Country;
