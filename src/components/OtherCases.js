import styles from '../styles/OtherCases.module.css'
import ActiveCases from './ActiveCases'
import CasesCharts from './CasesCharts'
import CriticalCases from './CriticalCases'
import { useAxios } from 'use-axios-client'
import TotalDeaths from './TotalDeaths'
import TodayDeaths from './TodayDeaths'
import TodayCases from './TodayCases'
import TotalVaccinated from './TotalVaccinated'
import TodayRecovered from './TodayRecovered'
import AffectedCountries from './AffectedCountries'

const OtherCases = () => {
	const { data } = useAxios({
		url: 'https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=1&fullData=true',
	})

	return (
		<section className={styles.totalDeaths}>
			<div className={styles.totalDeathsWrapper}>
				{/* total deaths */}
				<article>
					<TotalDeaths />
				</article>

				{/* total vaccination */}
				<article>{data && <TotalVaccinated data={data} />}</article>

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
			{data && <CasesCharts vaccinatedData={data} />}
		</section>
	)
}

export default OtherCases
