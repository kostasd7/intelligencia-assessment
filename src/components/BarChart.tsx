import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export const BarChart: ({ labelData }: { labelData: string[] }) => JSX.Element = ({ labelData }: { labelData: string[] }) => {
  const data = labelData.map(
    (label: string, index: number) => ({
      x: index + 1,
      y: label.split(' ').length
    })
  )
  const options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Word count per page'
    },
    series: [{
      name: 'Label word count',
      data
    }],
    xAxis: {
      reversed: true,
      title: {
        text: 'Record'
      }
    },
    yAxis: {
      allowDecimals: false,
      title: ''
    }
  }

  return (
        <div style={{ marginBottom: '20px' }}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
  )
}

export default BarChart
