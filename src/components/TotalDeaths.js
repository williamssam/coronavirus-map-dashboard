import styles from '../styles/OtherCases.module.css'
import { GlobalCasesContext } from '../Context/GlobalCasesContext'
import { useContext } from 'react'

const TotalDeaths = () => {
	const data = useContext(GlobalCasesContext)
	return (
		<>
			<div className={styles.totalConfirmed}>
				<h2>Total Deaths</h2>
				<p style={{ color: 'var(--deaths-clr)' }}>
					{data.deaths.toLocaleString()}
				</p>
			</div>
		</>
	)
}

export default TotalDeaths
