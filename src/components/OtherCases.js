import styles from '../styles/OtherCases.module.css'
import ActiveCases from './ActiveCases'
import CasesCharts from './CasesCharts'
import CriticalCases from './CriticalCases'
import TotalDeaths from './TotalDeaths'
import TodayDeaths from './TodayDeaths'
import TodayCases from './TodayCases'
import TotalVaccinated from './TotalVaccinated'
import TodayRecovered from './TodayRecovered'
import AffectedCountries from './AffectedCountries'

const OtherCases = () => {
	return (
		<section className={styles.totalDeaths}>
			<div className={styles.totalDeathsWrapper}>
				{/* total deaths */}
				<article>
					<TotalDeaths />
				</article>

				{/* total vaccination */}
				<article>
					<TotalVaccinated />
				</article>

				<article>
					<ActiveCases />
				</article>

				<article>
					<CriticalCases />
				</article>

				<article>
					<TodayCases />
				</article>

				<article>
					<TodayDeaths />
				</article>

				<article>
					<TodayRecovered />
				</article>

				<article>
					<AffectedCountries />
				</article>
			</div>

			{/* charts */}
			<CasesCharts />
		</section>
	)
}

export default OtherCases
