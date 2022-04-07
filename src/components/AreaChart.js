import { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import { fetchDailyData } from '../api'

function AreaChart({ country }) {
  const [dailyData, setDailyData] = useState([])
  useEffect(() => {
    const fetchCountryDailyData = async () => {
      const data = await fetchDailyData(country)
      setDailyData(data)
    }
    fetchCountryDailyData()
  }, [country])



  return (
    <div id='chart'>
      <Chart
        options={{
          chart: {
            height: 150,
            type: 'area',
            foreColor: "#ccc",
          },
          dataLabels: {
            enabled: false
          },
          colors: ['#00BAEC', '#FCBA03', '#FF0080'],
          stroke: {
            curve: 'smooth',
            width: 2,
          },
          
          xaxis: {
            type: 'datetime',
            categories: dailyData.map(item => item.Date)
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy '
            },
          },
        }}
        series={[{
          name: 'Confirmed',
          data: dailyData.map(item => item.Confirmed)
        }, {
          name: 'Active',
          data: dailyData.map(item => item.Active)
        },
        {
          name: 'Deaths',
          data: dailyData.map(item => item.Deaths)
        }
        ]}
        style={{
          marginTop: 50,
          marginBottom: 50,
      
        }}
        height={350}
      />
    </div>
  )
}

export default AreaChart