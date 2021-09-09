import { useContext } from 'react'
import styles from '../styles/CasesCharts.module.css'
import { Pie } from 'react-chartjs-2'
import { GlobalCasesContext } from '../Context/GlobalCasesContext'

const CovidCharts = ({ vaccinatedData }) => {
	console.log(vaccinatedData)

	const vaccine = vaccinatedData.map((item) => {
		return item.total
	})

	// console.log(vaccine)

	const data = useContext(GlobalCasesContext)

	const details = {
		labels: ['Cases', 'Deaths', 'Recovered', 'Vaccinated'],
		datasets: [
			{
				label: 'My First Dataset',
				data: [data.cases, data.deaths, data.recovered, vaccine],
				backgroundColor: ['#242424', '#f7042e', '#32cd32', '#007fff'],
				hoverOffset: 4,
			},
		],
	}

	return (
		<div className={styles.charts}>
			<Pie data={details} />

			<h2>Global Covid cases chart</h2>
		</div>
	)
}

export default CovidCharts
