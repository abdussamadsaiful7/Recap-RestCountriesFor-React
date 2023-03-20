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



// নিয়ম - ১, NO destructuring

// const getCountryHTML = country =>{
//    
//     return `
//         <div class="country">
//             <h2>${country.name.common}<h2>
//             <img src="${country.flags.png}">
//             <p>Capital: ${country.capital}</p>
//             <p>Language: ${country.languages}</p>
//             <p>Region: ${country.continents}</p>
//         </div>
//     `;
  
// }


// নিয়ম - 2, destructuring

// const getCountryHTML = country =>{
//     const {name, flags, capital, continents, languages} = country;
    
//     return `
//         <div class="country">
//             <h2>${name.common}<h2>
//             <img src="${flags.png}">
//             <p>Capital: ${capital}</p>
//             <p>Language: ${languages}</p>
//             <p>Region: ${continents}</p>
//         </div>
//     `;
  
// }




// নিয়ম - 3,  destructuring

const getCountryHTML = ({name, flags, capital, continents, languages}) =>{
    //const {name, flags, capital, continents, languages} = country;
    
    return `
        <div style="width:320px;" class="country">
            <h2>${name.common}<h2>
            <img src="${flags.png}">
            <p>Capital: ${capital}</p>
            <p>Language: ${languagesData(languages)}</p>
            <p>Region: ${continents}</p>
        </div>
    `;
  
}

// const languagesData = (languages)=>{
//     if(languages){
//         const arrayLanguages = Object.values(languages).join(' ');
//         for(let i =0; i<arrayLanguages.length; i++){
//             return arrayLanguages;
//         }
//     }
// }

const languagesData = languages => {
  if (languages) {
    const keys = Object.keys(languages);
    const li = keys
      .map(key => {
        return `
        <li>${languages[key]}</li>
        `;
      })
      .join(" ");
    return li;
  }
};


loadCountries();



// ---------------Using Object.keys()------------------
// const languagesData = languages => {
//   if (languages) {
//     const keys = Object.keys(languages);
//     const li = keys
//       .map(key => {
//         return `
//         <li>${languages[key]}</li>
//         `;
//       })
//       .join(" ");
//     return li;
//   }
// };
// ---------------Using Object.values()------------------
// const languagesData = languages => {
//   if (languages) {
//     const values = Object.values(languages);
//     const li = values
//       .map(value => {
//         return `
//         <li>${value}</li>
//         `;
//       })
//       .join(" ");
//     return li;
//   }
// };
// ---------------Using for in loop()------------------
// const languagesData = languages => {
//   if (languages) {
//     let element = "";
//     for (let key in languages) {
//       element += `
//         <li>${languages[key]}</li>
//         `;
//     }
//     return element;
//   }
// };