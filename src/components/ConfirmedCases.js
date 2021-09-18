import styles from '../styles/ConfirmedCases.module.css'
import { instance } from '../App'
import { useAxios } from 'use-axios-client'

const ConfirmedCases = () => {
	const { data } = useAxios({
		axiosInstance: instance,
		url: '/countries',
	})

	return (
		<div className={styles.confirmedCases}>
			<h2>Confirmed Cases by Country/Region/Sovereinty</h2>

			<ul className={styles.countryCases}>
				{data &&
					data
						// sort data in descending  order based on number of cases
						.sort((a, b) => b.cases - a.cases)
						.map((item, index) => (
							<li key={index}>
								<article>
									<span>{item.cases.toLocaleString()}</span>{' '}
									{item.country}
								</article>
							</li>
						))}
			</ul>
		</div>
	)
}

export default ConfirmedCases
