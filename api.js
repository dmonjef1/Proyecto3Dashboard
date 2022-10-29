let statusArray = [];
let dateArray = [];

async function getData() {
    const urlApi = "https://api.covid19api.com/dayone/country/chile/status/confirmed"

    const respuesta = await fetch(urlApi);

    const obtenerData = await respuesta.json();

    const valores =  obtenerData.map((x) => x.Cases);
    const fechas =  obtenerData.map((x) => x.Date.split('T')[0]); 

    console.log(fechas);
    
    dateArray = fechas
    statusArray = valores


}

getData()
export {getData, statusArray, dateArray}