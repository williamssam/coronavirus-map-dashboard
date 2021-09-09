import styles from '../styles/GlobalCases.module.css'
import TotalCases from './TotalCases'
import OtherCases from './OtherCases'

const GlobalCases = () => {
	return (
		<main>
			<header className={styles.header}>
				<h1>Coronavirus (Covid-19) Global Cases</h1>
			</header>

			<section className={styles.covidContainer}>
				{/* total cases */}
				<TotalCases />

				{/* <Map /> */}
				<section className={styles.map}></section>

				{/* other info */}
				<OtherCases />
			</section>
		</main>
	)
}

export default GlobalCases
