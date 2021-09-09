import './styles/global.css'
import axios from 'axios'
import { Homepage } from './pages'

export const instance = axios.create({
	baseURL: 'https://disease.sh/v3/covid-19',
})

function App() {
	return (
		<div className='container'>
			<Homepage />
		</div>
	)
}

export default App
