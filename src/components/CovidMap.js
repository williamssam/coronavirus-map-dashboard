import styles from '../styles/Map.module.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { instance } from '../App'
import { useAxios } from 'use-axios-client'
import { getDateName } from '../utilities/getDateName'

const CovidMap = () => {
	const { data } = useAxios({
		axiosInstance: instance,
		url: '/countries',
	})

	return (
		<MapContainer
			center={[9.082, 8.6753]}
			zoom={3}
			scrollWheelZoom={false}
			placeholder={<h1 style={{ color: '#000' }}>loading...</h1>}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				// for light theme
				// url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
			/>

			{data &&
				data.map((item, index) => (
					<Marker
						key={index}
						position={[
							item.countryInfo.lat,
							item.countryInfo.long,
						]}>
						<Popup>
							<div className={styles.popup}>
								<header>
									<img
										src={item.countryInfo.flag}
										alt='country flag'
									/>
									<h2>{item.country}</h2>
								</header>

								<ul>
									<li>
										<strong>Confirmed:</strong>{' '}
										{item.cases.toLocaleString()}
									</li>
									<li>
										<strong>Deaths:</strong>{' '}
										{item.deaths.toLocaleString()}
									</li>
									<li>
										<strong>Recovered:</strong>{' '}
										{item.recovered.toLocaleString()}
									</li>
									<li>
										<strong>Active:</strong>{' '}
										{item.active.toLocaleString()}
									</li>
									<li>
										<strong>Critical:</strong>{' '}
										{item.critical.toLocaleString()}
									</li>
									<li>
										<strong>Last updated at:</strong>
										{''}
										{getDateName(item.updated)}
									</li>
								</ul>
							</div>
						</Popup>
					</Marker>
				))}
		</MapContainer>
	)
}

export default CovidMap
