// import { createContext } from 'react'
import { useAxios } from 'use-axios-client'
import GlobalCases from '../components/GlobalCases'
import { GlobalCasesContext } from '../Context/GlobalCasesContext'
import { instance } from '../App'

export const Homepage = () => {
	const { data, error, loading } = useAxios({
		axiosInstance: instance,
		url: '/all',
	})

	return (
		<GlobalCasesContext.Provider value={data}>
			{/* {loading && 'Loading...'} */}
			{/* {error && 'Error...'} */}
			{data && <GlobalCases />}
		</GlobalCasesContext.Provider>
	)
}
