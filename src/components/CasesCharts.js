import { useContext } from 'react'
import styles from '../styles/CasesCharts.module.css'
import { Doughnut } from 'react-chartjs-2'
import { GlobalCasesContext } from '../Context/GlobalCasesContext'

const CovidCharts = () => {
	const data = useContext(GlobalCasesContext)

	console.log(data)

	const details = {
		labels: ['Cases', 'Deaths', 'Recovered', 'Active Case'],
		datasets: [
			{
				data: [data.cases, data.deaths, data.recovered, data.active],
				backgroundColor: [
					'rgb(36, 36, 36, 0.9)',
					'rgb(247, 4, 46, 0.9)',
					'rgb(50, 205, 50, 0.9)',
					'rgb(255, 69, 0, 0.9)',
				],
				borderColor: [
					'rgb(36, 36, 36)',
					'rgb(247, 4, 46)',
					'rgb(50, 205, 50)',
					'rgb(255, 69, 0)',
				],
				hoverOffset: 4,
			},
		],
	}

	return (
		<div className={styles.charts}>
			<Doughnut data={details} />

			<h2>Global Covid cases chart</h2>
		</div>
	)
}

export default CovidCharts
