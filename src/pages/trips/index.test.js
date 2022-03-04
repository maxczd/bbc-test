import Trips from '.'
import { render, screen } from '@testing-library/react'

describe('Trips page', () => {
  it('Should render without crash', async () => {
    render(<Trips />)
  })
})

describe('Trips title', () => {
  test('Should be rendered', async () => {
    render(<Trips />)
    expect(screen.getByText('Trips 🚗')).toBeTruthy()
  })
})
