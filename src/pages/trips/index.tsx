import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../../components/card'

export interface trip {
  link: string
  distance_in_meters: number
  duration_in_seconds: number
  price: {
    amount: string
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

const TripsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Trips = () => {
  const [trips, setTrips] = useState<Array<trip>>([])
  const [cursor, setCursor] = useState<string>('')
  const today = new Date().toISOString()
  let url = `https://public-api.blablacar.com/api/v3/trips?key=YzbiA8L6DcqxTvSna1lOFQQU66FosDVs&from_coordinate=48.8566%2C2.3522&to_coordinate=45.764043%2C4.835659&from_country=FR&to_country=FR&locale=en-GB&start_date_local=${today}&currency=EUR&count=5`
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
          <Card
            key={`trip-${index}`}
            amount={trip.price.amount}
            currency={trip.price.currency}
            destination={trip.waypoints[1].place.city}
            start={trip.waypoints[0].place.city}
            link={trip.link}
            time={trip.waypoints[0].date_time}
          />
        )
      })}
      {cursor && (
        <button onClick={() => fetchData(cursor)}>Load more results ➕</button>
      )}
    </TripsContainer>
  )
}

export default Trips
