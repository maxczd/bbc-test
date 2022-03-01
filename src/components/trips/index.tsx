import { useEffect, useState } from 'react'
import {
  TripsContainer,
  TripLocations,
  TripDatePrice,
  TripCard,
  BBCLogo,
  BBCLink,
} from './style'

interface trips {
  link: string
  distance_in_meters: number
  duration_in_seconds: number
  price: {
    amount: number
    currency: string
  }
  waypoints: waypoint[]
}

interface waypoint {
  date_time: Date
  place: {
    address: string
    city: string
  }
}

export const formatDate = (date: Date | string) => {
  const hours = new Date(date).getHours().toString()
  let minutes = new Date(date).getMinutes().toString()
  if (minutes === '0') minutes = '00'
  return `${hours}:${minutes}`
}

const TripCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #f9f9fc;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 8%) 0px 2pt 8pt, rgb(0 0 0 / 8%) 0px 2pt 16pt;
  width: 50%;
`
const TripLocations = styled.div`
  display: flex;
  flex-direction: column;
`
const TripDatePrice = styled.div`
  display: flex;
  flex-direction: column;
`
const BBCLink = styled.a`
  width: 25px;
  height: 25px;
  display: flex;
  align-self: center;
`
const BBCLogo = styled.img`
  width: 25px;
  height: 25px;
`

const Trips = () => {
  const [trips, setTrips] = useState<Array<trips>>([])
  const [cursor, setCursor] = useState<string>('')
  let url = `https://public-api.blablacar.com/api/v3/trips?key=YzbiA8L6DcqxTvSna1lOFQQU66FosDVs&from_coordinate=48.8566%2C2.3522&to_coordinate=45.764043%2C4.835659&from_country=FR&to_country=FR&locale=en-GB&start_date_local=2020-07-10T20:00:00&currency=EUR&count=2`
  const fetchData = async (cursor?: string) => {
    if (cursor) {
      url = url + `&from_cursor	=${cursor}`
    }
    try {
      const response = await fetch(url)
      const data = await response.json()
      setTrips(trips.concat(data.trips))
      setCursor(data.next_cursor)
    } catch (err) {
      console.log(err)
    } finally {
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <TripsContainer>
      <h1>Trips 🚗</h1>
      {trips.map((trip, index) => {
        return (
          <TripCard key={`trip-${index}`}>
            <TripLocations>
              <span>🏠 {trip.waypoints[0].place.city}</span>
              <span>📍 {trip.waypoints[1].place.city}</span>
            </TripLocations>
            <TripDatePrice>
              <span>🗓️ {trip.waypoints[0].date_time}</span>
              <span>
                💰 {trip.price.amount} {trip.price.currency}
              </span>
            </TripDatePrice>
            <BBCLink href={trip.link}>
              <BBCLogo src="assets/bbc.png" alt="blablacar" />
            </BBCLink>
          </TripCard>
        )
      })}
      {cursor && (
        <button onClick={() => fetchData(cursor)}>Load more results ➕</button>
      )}
    </TripsContainer>
  )
}

export default Trips
