import React, {useEffect, useState} from 'react';
import { fetchDailyData } from '../../Api/index';
import {Line , Bar} from 'react-chartjs-2';
import './Chart.module.css'
const Chart = ({data , country}) =>{
    const [dailyData , SetDailyData] = useState({});

    useEffect(() => {
     const fetchdata  = async () =>{
        SetDailyData(await fetchDailyData());
     }

     console.log(dailyData)

     fetchdata();
    })

    const LineChart = (
        
        dailyData.length
        ? (
         <Line
        data = {{
         labels : dailyData.map(({ date }) => date),
         datasets : [{
           data :  dailyData.map(({ confirmed}) => confirmed),
           label : 'Infected',
           borderColor : "#3333ff",
           backgroundColor : 'rgba(0 , 0 , 255 ,0.5)',
           fill : true
         },{
            data :  dailyData.map(({ deaths }) => deaths),
            label : 'deaths',
            borderColor : "red",
            backgroundColor : "rgba(255,0,0,0.5)",
            fill : true
         }] 
         
        }}
        />) : null
    ) 

   const BarChar = (
        data.confirmed?(
            <Bar

            data = {{
                labels : ['Infected' , 'Recovered' , 'Deaths'],
                datasets : [{
                    label: 'People',
                    backgroundColor : [
                        'rgba(0 , 0 , 255,0.5)',
                        'rgba(0 , 255 , 0, 0.5)',
                        'rgba(255, 0 ,0 ,0.5)'  
                    ],
                    data : [data.confirmed.value , data.recovered.value , data.deaths.value]
                }]
            }}

            />) : null
        )
        
    return (
        <div className = "container3">
    {country ? BarChar : LineChart}
        </div>
    )
}


export default Chart;