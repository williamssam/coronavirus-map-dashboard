import styles from '../styles/OtherCases.module.css'

const TotalVaccinated = () => {
	return (
		<article>
			<div className={styles.totalConfirmed}>
				<h2>Total Vacinnated</h2>
				<p style={{ color: 'var(--vacinnated-clr)' }}>687,404,658</p>
			</div>
		</article>
	)
}

export default TotalVaccinated
