import { expect, test } from 'vitest'


test('Fails when expect is not true', () => {
  expect(false).toBe(true)
})
