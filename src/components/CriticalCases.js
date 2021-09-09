import styles from '../styles/OtherCases.module.css'
import { GlobalCasesContext } from '../Context/GlobalCasesContext'
import { useContext } from 'react'

const CriticalCases = () => {
	const data = useContext(GlobalCasesContext)
	return (
		<div className={styles.totalConfirmed}>
			<h2>Critical Cases</h2>
			<p style={{ color: 'var(--critical-cases-clr)' }}>
				{data.critical.toLocaleString()}
			</p>
		</div>
	)
}

export default CriticalCases
