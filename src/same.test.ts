import { TestCollection, describe, given, it } from '@typed/test'

import { same } from './same'

export const test: TestCollection = describe(`same`, [
  given(`an expected and actual value`, [
    it(`returns actual value if assertion is true`, ({ equal }) => {
      const expected = 2
      const actual = 2

      equal(actual, same(expected, actual))
    }),

    it(`throws an error if assertion is false`, ({ equal }) => {
      const expected = 1
      const actual = 2

      try {
        same(expected, actual)
        throw new Error(`Should throw error`)
      } catch (e) {
        equal(e.message, `Expected value is not strictly equal to actual value`)
      }
    }),
  ]),
])
