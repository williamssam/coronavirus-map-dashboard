import { useContext } from 'react'
import styles from '../styles/TotalCases.module.css'
import ConfirmedCases from './ConfirmedCases'
import { GlobalCasesContext } from '../Context/GlobalCasesContext'
import { getDateName } from '../utilities/getDateName'

const TotalCases = () => {
	const data = useContext(GlobalCasesContext)

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
				<p>{getDateName(data.updated).toUpperCase()}</p>
			</div>
		</section>
	)
}

export default TotalCases
