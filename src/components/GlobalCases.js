import styles from '../styles/GlobalCases.module.css'
import TotalCases from './TotalCases'
import OtherCases from './OtherCases'
import CovidMap from './CovidMap'

const GlobalCases = () => {
	return (
		<main>
			<header className={styles.header}>
				<h1>Coronavirus (Covid-19) Map Dashboard</h1>

				<p>
					Built by Williams Samuel, with{' '}
					<a
						href='https://react-leaflet.js.org/'
						target='_blank'
						rel='noreferrer'>
						react-leaflet
					</a>
					,{' '}
					<a
						href='https://disease.sh/docs/#/'
						target='_blank'
						rel='noreferrer'>
						disease sh api
					</a>
					. Check out the code on{' '}
					<a
						href='https://github.com/williamssam/Coronavirus-Update'
						target='_blank'
						rel='noreferrer'>
						Github
					</a>
				</p>
			</header>

			<section className={styles.covidContainer}>
				{/* total cases */}
				<TotalCases />

				{/* <Map /> */}
				<CovidMap />

				{/* other info */}
				<OtherCases />
			</section>
		</main>
	)
}

export default GlobalCases
