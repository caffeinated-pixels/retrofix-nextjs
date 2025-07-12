export const isEmailValid = (email: string) => {
  // Basic format validation
  const emailRegex =
    /^[a-zA-Z0-9!#$%&'*+/=?^_{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/

  if (!emailRegex.test(email)) {
    return false
  }

  // this is probably overkill, but claude was on a mission, lol
  // Additional length validation (RFC 5322 limits)
  const [localPart, domainPart] = email.split('@')

  // Local part should not exceed 64 characters
  if (localPart.length > 64) {
    return false
  }

  // Domain part should not exceed 253 characters
  if (domainPart.length > 253) {
    return false
  }

  return true
}
