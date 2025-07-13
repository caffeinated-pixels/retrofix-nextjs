import { headers } from 'next/headers'

import { getDeviceOnServer } from '../getDeviceOnServer'

jest.mock('next/headers', () => ({
  headers: jest.fn(),
}))

const mockHeaders = headers as jest.Mock

describe('getDeviceOnServer', () => {
  beforeEach(() => {
    mockHeaders.mockClear()
  })

  it('should pass through the expected device boolean values from isMobilejs', () => {
    const mockHeadersList = {
      get: jest
        .fn()
        .mockReturnValue(
          'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1'
        ),
    }
    mockHeaders.mockReturnValue(mockHeadersList)

    const result = getDeviceOnServer()

    expect(result).toEqual({
      isMobileOrTablet: true,
      isMobile: true,
      isTablet: false,
      isDesktop: false,
    })
  })
})
