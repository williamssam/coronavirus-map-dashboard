import styles from '../styles/OtherCases.module.css'
import { GlobalCasesContext } from '../Context/GlobalCasesContext'
import { useContext } from 'react'

const TodayCases = () => {
	const data = useContext(GlobalCasesContext)
	return (
		<div className={styles.totalConfirmed}>
			<h2>Today Cases</h2>
			<p style={{ color: 'var(--today-cases-clr)' }}>
				{data.todayCases.toLocaleString()}
			</p>
		</div>
	)
}

export default TodayCases
