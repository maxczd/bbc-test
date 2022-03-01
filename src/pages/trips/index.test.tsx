import Trips from '.'
import { render } from '@testing-library/react'

describe('Trips', () => {
  test('Should render without crash', async () => {
    render(<Trips />)
  })
})
