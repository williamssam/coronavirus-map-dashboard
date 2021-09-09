import styles from '../styles/TotalCases.module.css'
import { GlobalCasesContext } from '../Context/GlobalCasesContext'
import { useContext } from 'react'

const AffectedCountries = () => {
	const data = useContext(GlobalCasesContext)
	return (
		<div className={styles.totalConfirmed}>
			<h2>Affected Countries</h2>
			<p style={{ color: '#fff' }}>
				{data.affectedCountries.toLocaleString()}
			</p>
		</div>
	)
}

export default AffectedCountries
