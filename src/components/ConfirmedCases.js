import styles from '../styles/ConfirmedCases.module.css'

const ConfirmedCases = () => {
	return (
		<div className={styles.confirmedCases}>
			<h2>Confirmed Cases by Country/Region/Sovereinty</h2>

			<ul className={styles.countryCases}>
				<li>
					<span>25,0000</span> US
				</li>
			</ul>
		</div>
	)
}

export default ConfirmedCases
