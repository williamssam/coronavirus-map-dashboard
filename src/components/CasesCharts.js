import styles from '../styles/CasesCharts.module.css'

const CovidCharts = () => {
	return (
		<div className={styles.charts}>
			<div className={styles.chart}></div>

			<div className={styles.btnContainer}>
				<button>Cases</button>
				<button>Deaths</button>
				<button>Recovered</button>
			</div>
		</div>
	)
}

export default CovidCharts
