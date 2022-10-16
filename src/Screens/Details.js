import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import {useLocation} from 'react-router-dom';
Chart.register(...registerables);



function Details(props) {
    const location = useLocation ()
    console.log(location?.state);
    return(
        // <div>
        //     <h1>
        //         hello
        //         {/* {props.location.state} */}
        //     </h1>
        // </div>
        <Line
            // height= {100}
            // width = {200}
            data={{
            labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
            datasets: [
                {
                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                label: "FPT",
                borderColor: "#3e95cd",
                fill: false
                },
            ]
            }}
            options={{
            title: {
                display: true,
                text: "World population per region (in millions)"
            },
            legend: {
                display: true,
                position: "bottom"
            }
            }}
        />
    )
}

export default Details;