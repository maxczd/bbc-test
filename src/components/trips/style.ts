import styled from 'styled-components'

export const TripsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TripCard = styled.div`
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
export const TripLocations = styled.div`
  display: flex;
  flex-direction: column;
`
export const TripDatePrice = styled.div`
  display: flex;
  flex-direction: column;
`
export const BBCLink = styled.a`
  width: 25px;
  height: 25px;
  display: flex;
  align-self: center;
`
export const BBCLogo = styled.img`
  width: 25px;
  height: 25px;
`