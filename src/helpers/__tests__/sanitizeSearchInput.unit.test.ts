import { sanitizeSearchInput } from '../sanitizeSearchInput'

describe('sanitizeSearchInput', () => {
  it('should trim whitespace from input', () => {
    expect(sanitizeSearchInput('  hello world  ')).toBe('hello world')
  })

  it('should remove HTML/XML tags (< and >)', () => {
    expect(sanitizeSearchInput('hello<script>alert("xss")</script>world')).toBe(
      'helloscriptalert("xss")/scriptworld'
    )
    expect(sanitizeSearchInput('<div>content</div>')).toBe('divcontent/div')
    expect(sanitizeSearchInput('test < 5 > 3')).toBe('test  5  3')
    expect(sanitizeSearchInput('<<>>')).toBe('')
    expect(sanitizeSearchInput('  <div>  content  </div>  ')).toBe(
      'div  content  /div'
    )
  })

  it('should limit input length to 100 characters', () => {
    const longInput = 'a'.repeat(150)
    const result = sanitizeSearchInput(longInput)
    expect(result.length).toBe(100)
    expect(result).toBe('a'.repeat(100))
  })
})
