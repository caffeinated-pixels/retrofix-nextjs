import { removeDotFromPhotoUrl } from '../removeDotFromPhotoUrl'

describe('removeDotFromPhotoUrl', () => {
  it('should remove the dot from the start of the photo url', () => {
    expect(removeDotFromPhotoUrl('./assets/images/photo.jpg')).toBe(
      '/assets/images/photo.jpg'
    )
  })

  it('should return the original url if it does not start with a dot', () => {
    expect(removeDotFromPhotoUrl('/assets/images/photo.jpg')).toBe(
      '/assets/images/photo.jpg'
    )
  })
})
