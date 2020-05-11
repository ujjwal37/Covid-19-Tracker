import React , {useEffect , useState} from 'react';
import { FetchCountries } from '../../Api/index'

import {FormControl , NativeSelect} from '@material-ui/core'

const Country = ({handelCountry}) =>{

    const [fetchCountries , setCountries] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            setCountries( await FetchCountries());
        }

    

       fetchData(); 
    },[setCountries])

    console.log(fetchCountries);
    return (
        <FormControl className = "formControl">
            <NativeSelect defaultValue = " " onChange = {(e) => handelCountry(e.target.value)}>
                {fetchCountries.map((country , i) => <option key = {i} value = {country}>{country} </option>)}
            </NativeSelect>

        </FormControl>
    )
}


export default Country;