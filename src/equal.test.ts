import { TestCollection, describe, given, it } from '@typed/test'

import { equal } from './equal'

export const test: TestCollection = describe(`equal`, [
  given(`an expected and actual value`, [
    it(`returns the actual value if assertion is true`, ({ same }) => {
      const expected = { a: 1 }
      const actual = { a: 1 }

      same(equal(expected, actual), actual)
    }),

    it(`throws an error if assertion is false`, ({ same }) => {
      const expected = { a: 1 }
      const actual = { a: 2 }

      try {
        equal(expected, actual)
        throw new Error(`Should throw error`)
      } catch (e) {
        same(e.message, `Expected value is not equal to actual value`)
      }
    }),
  ]),
])
