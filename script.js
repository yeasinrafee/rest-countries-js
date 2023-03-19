const fetchData = async () =>{
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    displayData(data);
}

const displayData = (countries) =>{
    const countriesHtml = countries.map(country => displayHTML(country));
    const container = document.getElementById('country');
    container.innerHTML = countriesHtml.join(' ');
}

const displayHTML = country =>{
    console.log(country);

    return `
        <div class="country-box">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}" alt="flag" />
        </div>
    `
}
fetchData();