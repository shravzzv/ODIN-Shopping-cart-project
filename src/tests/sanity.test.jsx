import { describe, test, expect } from 'vitest'

describe('Sanity tests', () => {
  test('should pass true for true', () => {
    expect(true).toBe(true)
  })
  test('should pass false for false', () => {
    expect(false).toBe(false)
  })
  test('should pass 1 + 1 to be 2', () => {
    expect(1 + 1).toBe(2)
  })
})
