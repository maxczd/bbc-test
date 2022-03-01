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

export const formatPrice = (price: string, currency: string) => {
  const currencySymbol = formatCurrency(currency)
  const amount = formatAmount(price)
  if (currency === 'EUR') return `${amount} ${currencySymbol}`
  else if (currency === 'GBP') return currencySymbol + amount
}

export const formatAmount = (amount: string) => {
  console.log('amount', amount, amount.replace('.00', ''))
  return amount.replace('.00', '')
}

export const formatCurrency = (currency: string) => {
  switch (currency) {
    case 'EUR':
      return '€'
    case 'GBP':
      return '£'
    default:
      return '€'
  }
}

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
              <span>⌚ {formatDate(trip.waypoints[0].date_time)}</span>
              <span>
                💰 {formatPrice(trip.price.amount, trip.price.currency)}
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
