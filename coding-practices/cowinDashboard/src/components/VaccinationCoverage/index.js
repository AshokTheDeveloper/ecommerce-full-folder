// Write your code here
import './index.css'
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const VaccinationCoverage = props => {
  const dataFormatter = number => {
    if (number > 100) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  const {vaccinationDetails} = props
  return (
    <div className="bar-chart-container">
      <h1 className="vaccination-heading">Vaccination Coverage</h1>
      <BarChart
        data={vaccinationDetails}
        width={1000}
        height={300}
        margin={{top: 2}}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#cbd5e1',
            strokeWidth: 1,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: '#cbd5e1',
            strokeWidth: 1,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
            textAlign: 'center',
            fontSize: 12,
          }}
        />
        <Bar
          dataKey="doseOne"
          name="Dose 1"
          fill="#5a8dee"
          barSize="20%"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="doseTwo"
          name="Dose 2"
          fill="#f54394"
          barSize="20%"
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
