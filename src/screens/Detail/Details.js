/** @format */

import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import MyTable from "../../components/Table/Table";

Chart.register(...registerables);


function Details() {
	const yearStatisticsCol = [
		{
      Header: 'Ngày/Giờ',
      accessor: 'dateAndTime',
			Filter: false,
    },
		{
      Header: '0-2',
      accessor: 'from0to2',
			Filter: false,
    },
		{
      Header: '2-4',
      accessor: 'from2to4',
			Filter: false,
    },
		{
      Header: '4-6',
      accessor: 'from4to6',
			Filter: false,
    },
		{
      Header: '6-8',
      accessor: 'from6to8',
			Filter: false,
    },
		{
      Header: '8-10',
      accessor: 'from8to10',
			Filter: false,
    },
		{
      Header: '10-12',
      accessor: 'from10to12',
			Filter: false,
    },
		{
      Header: '12-14',
      accessor: 'from12to14',
			Filter: false,
    },
		{
      Header: '14-16',
      accessor: 'from14to16',
			Filter: false,
    },
		{
      Header: '16-18',
      accessor: 'from16to18',
			Filter: false,
    },
		{
      Header: '18-20',
      accessor: 'from18to20',
			Filter: false,
    },
		{
      Header: '20-22',
      accessor: 'from20to22',
			Filter: false,
    },
		{
      Header: '22-24',
      accessor: 'from22to24',
			Filter: false,
    }
	]  
	// const weekStatisticsCol = [
	// 	{}
	// ]

	const now = new Date()
  return (
    <div>
			<div className="rt-table">
				<MyTable columns={yearStatisticsCol} data={[]} />
			</div>
      <Line
        height={100}
        width={200}
        data={{
          labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
          datasets: [
            {
              data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
              label: "Africa",
              borderColor: "#3e95cd",
              fill: false,
            },
            {
              data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
              label: "Asia",
              borderColor: "#8e5ea2",
              fill: false,
            },
            {
              data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
              label: "Europe",
              borderColor: "#3cba9f",
              fill: false,
            },
            {
              data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
              label: "Latin America",
              borderColor: "#e8c3b9",
              fill: false,
            },
            {
              data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
              label: "North America",
              borderColor: "#c45850",
              fill: false,
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: "World population per region (in millions)",
          },
          legend: {
            display: true,
            position: "bottom",
          },
        }}
      /> 
			<div>
				<MyTable columns={yearStatisticsCol} data={[]} />
			</div>

    </div>
  );
}

export default Details;
