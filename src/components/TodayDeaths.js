import styles from '../styles/OtherCases.module.css'
import { GlobalCasesContext } from '../Context/GlobalCasesContext'
import { useContext } from 'react'

const TodayDeaths = () => {
	const data = useContext(GlobalCasesContext)
	return (
		<div className={styles.totalConfirmed}>
			<h2>Today Deaths</h2>
			<p style={{ color: 'var(--deaths-clr)' }}>
				{data.todayDeaths.toLocaleString()}
			</p>
		</div>
	)
}

export default TodayDeaths
