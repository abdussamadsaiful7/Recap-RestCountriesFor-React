const loadCountries = () =>{
    URL  =`https://restcountries.com/v3.1/all`;
    fetch(URL)
    .then(res =>res.json())
    .then(data=> displayCountries(data))
}

displayCountries = (countries)=>{
    console.log(countries);
}

loadCountries();