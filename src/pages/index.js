// import { createContext } from 'react'
import { useAxios } from 'use-axios-client'
import GlobalCases from '../components/GlobalCases'
import { GlobalCasesContext } from '../Context/GlobalCasesContext'
import { instance } from '../App'
import Loader from '../components/Loader'
import Error from '../components/Error'

export const Homepage = () => {
	const { data, error, loading } = useAxios({
		axiosInstance: instance,
		url: '/all',
	})

	return (
		<GlobalCasesContext.Provider value={data}>
			{loading && <Loader />}
			{error && <Error />}
			{data && <GlobalCases />}
		</GlobalCasesContext.Provider>
	)
}
