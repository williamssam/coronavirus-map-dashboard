import styles from '../styles/Error.module.css'
import image from '../assets/404.svg'
const Error = () => {
	return (
		// the design sucks 🤣😂
		<div className={styles.errorContainer}>
			<img src={image} alt='' />
			<h2 style={{ color: 'red' }}>
				Kindly check your network connection 🙏 or refresh the page 😉
			</h2>
		</div>
	)
}

export default Error
