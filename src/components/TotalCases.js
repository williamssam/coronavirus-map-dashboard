import { useContext } from 'react'
import styles from '../styles/TotalCases.module.css'
import ConfirmedCases from './ConfirmedCases'
import { GlobalCasesContext } from '../Context/GlobalCasesContext'

const TotalCases = () => {
	const data = useContext(GlobalCasesContext)

	console.log(data)
	return (
		<section className={styles.totalCases}>
			<div className={styles.totalConfirmed}>
				<h2>Total Confirmed</h2>
				<p>{data.cases.toLocaleString()}</p>
			</div>

			<div className={styles.totalConfirmed}>
				<h2>Total Recovered</h2>
				<p style={{ color: 'var(--recovered-clr)' }}>
					{data.recovered.toLocaleString()}
				</p>
			</div>

			{/* confirmed cases */}
			<ConfirmedCases />

			<div className={styles.updated}>
				<h2>Last Updated at (M/D/YYY)</h2>
				<p>3/29/2021, 12:21:34 PM</p>
			</div>
		</section>
	)
}

export default TotalCases
