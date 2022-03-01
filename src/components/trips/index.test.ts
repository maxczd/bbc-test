import { formatDate, formatCurrency, formatPrice, formatAmount } from './'

describe('The formatDate function', () => {
    it('should return the right format for a given date', () => {
        const expectedDtate = '22:30'
        expect(formatDate('2022-03-01T22:30:00')).toEqual(expectedDtate)
    })
    it('should add a 0 to the minutes if minutes equals 0', () => {
        const expectedDtate = '23:00'
        expect(formatDate('2022-03-01T23:00:00')).toEqual(expectedDtate)
    })
})

describe('The formatCurrency function', () => {
    it('should return the right symbol for a given currency', () => {
        const expectedDtate = '€'
        expect(formatCurrency('EUR')).toEqual(expectedDtate)
    })
})

describe('The formatPrice function', () => {
    it('should set the pound symbol at the right place', () => {
        const expectedDtate = '£6.30'
        expect(formatPrice('6.30', 'GBP')).toEqual(expectedDtate)
    })
    it('should set the euro symbol at the right place', () => {
        const expectedDtate = '38 €'
        expect(formatPrice('38.00', 'EUR')).toEqual(expectedDtate)
    })
})

describe('The formatAmount function', () => {
    it('should round number when necessary', () => {
        const expectedDtate = '6'
        expect(formatAmount('6.00')).toEqual(expectedDtate)
    })
})