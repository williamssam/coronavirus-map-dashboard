import styles from '../styles/TotalCases.module.css'
import { GlobalCasesContext } from '../Context/GlobalCasesContext'
import { useContext } from 'react'

const TodayRecovered = () => {
	const data = useContext(GlobalCasesContext)
	return (
		<div className={styles.totalConfirmed}>
			<h2>Today Recovered</h2>
			<p style={{ color: 'var(--recovered-clr)' }}>
				{data.todayRecovered.toLocaleString()}
			</p>
		</div>
	)
}

export default TodayRecovered
