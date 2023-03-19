const loadCountries = () =>{
    URL  =`https://restcountries.com/v3.1/all`;
    fetch(URL)
    .then(res =>res.json())
    .then(data=> displayCountries(data))
}

displayCountries = (countries)=>{
    //console.log(countries);
    const countriesHTML =countries.map(country =>getCountryHTML(country));
    //console.log(countriesHTML)
    const container = document.getElementById('countries');
    container.innerHTML =  countriesHTML.join('');
}

const getCountryHTML = country =>{
    return `
        <div>
            <h2>${country.name.common}<h2>
        </div>
    `
}

loadCountries();