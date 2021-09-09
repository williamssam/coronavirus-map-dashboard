import styles from '../styles/OtherCases.module.css'

const TotalVaccinated = ({ data }) => {
	return (
		<article>
			<div className={styles.totalConfirmed}>
				<h2>Total Vacinnated</h2>
				{data.map((item, index) => (
					<p style={{ color: 'var(--vacinnated-clr)' }} key={index}>
						{item.total.toLocaleString()}
					</p>
				))}
			</div>
		</article>
	)
}

export default TotalVaccinated
