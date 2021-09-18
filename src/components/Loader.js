import styles from '../styles/Loader.module.css'
const Loader = () => {
	return (
		<div className={styles.loadingContainer}>
			<div className={styles.loader}></div>
		</div>
	)
}

export default Loader
