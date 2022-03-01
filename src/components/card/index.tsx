import {
  TripCard,
  TripLocations,
  TripDatePrice,
  BBCLink,
  BBCLogo,
} from './style'

export const formatDate = (date: Date | string) => {
  const hours = new Date(date).getHours().toString()
  let minutes = new Date(date).getMinutes().toString()
  if (minutes === '0') minutes = '00'
  return `${hours}:${minutes}`
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

interface cardProp {
  link: string
  amount: string
  currency: string
  time: Date
  destination: string
  start: string
}

const Card = ({
  start,
  destination,
  time,
  amount,
  currency,
  link,
}: cardProp) => {
  return (
    <TripCard>
      <TripLocations>
        <span>🏠 {start}</span>
        <span>📍 {destination}</span>
      </TripLocations>
      <TripDatePrice>
        <span>⌚ {formatDate(time)}</span>
        <span>💰 {formatPrice(amount, currency)}</span>
      </TripDatePrice>
      <BBCLink href={link}>
        <BBCLogo src="assets/bbc.png" alt="blablacar" />
      </BBCLink>
    </TripCard>
  )
}

export default Card
