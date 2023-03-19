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

const displayHTML = ({name, flags, area, region}) =>{
    console.log(country);

    return `
        <div class="country-box">
            <h2>${name.common}</h2>
            <p>${area}</p>
            <p>${region}</p>
            <img src="${flags.png}" alt="flag" />
        </div>
    `
}
fetchData();