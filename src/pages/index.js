// import { createContext } from 'react'
import { useAxios } from 'use-axios-client'
import GlobalCases from '../components/GlobalCases'
import { GlobalCasesContext } from '../Context/GlobalCasesContext'

export const Homepage = () => {
	const { data, error, loading } = useAxios({
		url: 'https://disease.sh/v3/covid-19/all',
	})

	return (
		<GlobalCasesContext.Provider value={data}>
			{/* {loading && 'Loading...'} */}
			{/* {error && 'Error...'} */}
			{data && <GlobalCases />}
		</GlobalCasesContext.Provider>
	)
}
