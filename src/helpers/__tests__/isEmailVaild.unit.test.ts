import { isEmailValid } from '../isEmailValid'

describe('isEmailValid', () => {
  it('should return true if the email is valid', () => {
    expect(isEmailValid('test@test.com')).toBe(true)
  })
})
