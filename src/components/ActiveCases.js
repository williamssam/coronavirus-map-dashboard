import styles from '../styles/OtherCases.module.css'
import { GlobalCasesContext } from '../Context/GlobalCasesContext'
import { useContext } from 'react'

const ActiveCases = () => {
	const data = useContext(GlobalCasesContext)
	return (
		<div className={styles.totalConfirmed}>
			<h2>Active Cases</h2>
			<p style={{ color: 'var(--active-clr)' }}>
				{data.active.toLocaleString()}
			</p>
		</div>
	)
}

export default ActiveCases
