const loadCountries = () =>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res =>res.json())
    .then(data=> displayCountries(data))
}

displayCountries = (countries)=>{
    console.log(countries[1]);
    const countriesHTML =countries.map(country =>getCountryHTML(country));
    //console.log(countriesHTML)
    const container = document.getElementById('countries');
    container.innerHTML =  countriesHTML.join('');
}

const getCountryHTML = country =>{
    return `
        <div class="country">
            <h2>${country.name.common}<h2>
            <img src="${country.flags.png}">
            <p>Capital: ${country.capital}</p>
            <p>Language: ${country.languages}</p>
            <p>Region: ${country.continents}</p>
        </div>
    `
}

loadCountries();