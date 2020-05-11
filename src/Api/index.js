import axios from 'axios';

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    let changableUrl = url;
    if(country)
    changableUrl  = `${url}/countries/${country}`
    try{

        const {data: {confirmed , recovered , deaths , lastUpdate}} = await axios.get(changableUrl);
        
    return     {confirmed , recovered , deaths ,lastUpdate}
    
    } catch (error) {

    }
}

export const fetchDailyData = async (country) => {

    try{
        const { data } = await axios.get(`${url}/daily`); //we have array thats why we need to use array
         
      const modifiedData = data.map((d) =>({
           confirmed : d.confirmed.total,
           deaths :    d.deaths.total,
           date      : d.reportDate
      }))
    return modifiedData
    }catch (error) {

    }
}

export const FetchCountries = async () => {
    try{
        const { data : {countries}} = await axios.get(`${url}/countries`);
          
    return    countries.map((country) => country.name);

    
    }
    catch(error){
        console.log(error)
    }
}
     
