const fetchData = async () =>{
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    displayData(data);
}

const displayData = (countries) => countries.map(country => displayHTML(country)); 
const displayHTML = country =>{
    console.log(country);
    `
        <div>
            <h2>${country.name.common}</h2>
        </div>
    `
}
fetchData();