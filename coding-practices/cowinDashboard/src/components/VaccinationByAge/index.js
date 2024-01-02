// Write your code here
import './index.css'
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props
  return (
    <div className="vaccination-by-age-container">
      <h1 className="vaccination-by-age-heading">Vaccination By Age</h1>
      <PieChart width={600} height={400}>
        <Pie
          cx="50%"
          cy="36%"
          data={vaccinationByAgeDetails}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="70%"
          dataKey="count"
          layout="horizontal"
          verticalAlign="middle"
        >
          <Cell name="Male" fill="#2d87bb" />
          <Cell name="Female" fill="#a3df9f" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
