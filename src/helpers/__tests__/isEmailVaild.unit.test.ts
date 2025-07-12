import { isEmailValid } from '../isEmailValid'

describe('isEmailValid', () => {
  it('should return true if the email is valid', () => {
    expect(isEmailValid('foo.bar@test.com')).toBe(true)
    expect(isEmailValid('foo.bar@test.co.uk')).toBe(true)
    expect(isEmailValid('foo@test.co.uk')).toBe(true)
    expect(isEmailValid('Rutger.Hauer@bladerunner.com')).toBe(true)

    // Additional valid cases
    expect(isEmailValid('user+tag@example.com')).toBe(true) // Plus addressing
    expect(isEmailValid('user-name@example.com')).toBe(true) // Hyphen in local part
    expect(isEmailValid('user_name@example.com')).toBe(true) // Underscore in local part
    expect(isEmailValid('user123@example.com')).toBe(true) // Numbers in local part
    expect(isEmailValid('a@b.co')).toBe(true) // Minimal valid email
    expect(isEmailValid('test@example.museum')).toBe(true) // Long TLD
    expect(isEmailValid('test@sub.domain.com')).toBe(true) // Subdomain
  })

  it('should return false if the email is invalid', () => {
    expect(isEmailValid('test@test')).toBe(false)
    expect(isEmailValid('test@test.')).toBe(false)
    expect(isEmailValid('test.com')).toBe(false)
    expect(isEmailValid('foo..bar@test.com')).toBe(false)
    expect(isEmailValid('test@test@test.com')).toBe(false)

    // Additional invalid cases
    expect(isEmailValid('')).toBe(false) // Empty string
    expect(isEmailValid(' ')).toBe(false) // Just whitespace
    expect(isEmailValid('test@')).toBe(false) // Missing domain
    expect(isEmailValid('@test.com')).toBe(false) // Missing local part
    expect(isEmailValid('test @test.com')).toBe(false) // Space in local part
    expect(isEmailValid('test@ test.com')).toBe(false) // Space in domain
    expect(isEmailValid('test@test .com')).toBe(false) // Space in domain
    expect(isEmailValid('test@test.com ')).toBe(false) // Trailing space
    expect(isEmailValid(' test@test.com')).toBe(false) // Leading space
    expect(isEmailValid('.test@test.com')).toBe(false) // Leading dot in local part
    expect(isEmailValid('test.@test.com')).toBe(false) // Trailing dot in local part
    expect(isEmailValid('test@.test.com')).toBe(false) // Leading dot in domain
    expect(isEmailValid('test@test..com')).toBe(false) // Consecutive dots in domain
    expect(isEmailValid('test@test.c')).toBe(false) // Single letter TLD
    expect(isEmailValid('test@test.com.')).toBe(false) // Trailing dot after TLD
    expect(isEmailValid('test@-test.com')).toBe(false) // Leading hyphen in domain
    expect(isEmailValid('test@test-.com')).toBe(false) // Trailing hyphen in domain
  })

  it('should handle special characters correctly', () => {
    // These should be valid (common special characters)
    expect(isEmailValid('user+tag@example.com')).toBe(true)
    expect(isEmailValid('user-name@example.com')).toBe(true)
    expect(isEmailValid('user_name@example.com')).toBe(true)
    expect(isEmailValid("user'name@example.com")).toBe(true)

    // These should be invalid (problematic characters)
    expect(isEmailValid('user name@example.com')).toBe(false) // Space
    expect(isEmailValid('user<name@example.com')).toBe(false) // Less than
    expect(isEmailValid('user>name@example.com')).toBe(false) // Greater than
    expect(isEmailValid('user[name@example.com')).toBe(false) // Square bracket
    expect(isEmailValid('user]name@example.com')).toBe(false) // Square bracket
    expect(isEmailValid('user\\name@example.com')).toBe(false) // Backslash
    expect(isEmailValid('user,name@example.com')).toBe(false) // Comma
    expect(isEmailValid('user;name@example.com')).toBe(false) // Semicolon
    expect(isEmailValid('user:name@example.com')).toBe(false) // Colon
  })

  it('should handle length limits', () => {
    // Very long local part (typically 64 chars max)
    const longLocal = 'a'.repeat(65)
    expect(isEmailValid(`${longLocal}@test.com`)).toBe(false)

    // Very long domain part
    const longDomain = 'a'.repeat(64)
    expect(isEmailValid(`test@${longDomain}.com`)).toBe(false)

    // Reasonable length should work
    const okLocal = 'a'.repeat(50)
    expect(isEmailValid(`${okLocal}@test.com`)).toBe(true)
  })
})
