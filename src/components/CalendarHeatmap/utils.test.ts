import { listToMap, dateToYMD, getColor, getAllDays } from "./utils"

it("should convert a list of transactions to an object", () => {
  const transactions = [
    { transactionType: "success", date: "2019-01-01", amount: 1 },
    { transactionType: "success", date: "2019-01-01", amount: 1 },
    { transactionType: "success", date: "2019-01-02", amount: -1 }
  ]

  const expectedObject = {
    "2019-01-01": 2,
    "2019-01-02": -1
  }

  expect(listToMap(transactions)).toStrictEqual(expectedObject)
})

it("should convert a date to YMD", () => {
  const date = new Date("December 1, 2019 01:42:00")
  const expected = "2019-12-01"

  expect(dateToYMD(date)).toBe(expected)
})

it("should convert a 0 - 1 number to hsl css value", () => {
  const value = 0.42
  const expected = "hsl(50.4,100%,50%)"
  expect(getColor(value)).toBe(expected)
})

it("should return the total number of days for getAllDays", () => {
  const days = getAllDays(2019)
  expect(days.length).toBe(365)

  const daysForLeap = getAllDays(2020)
  expect(daysForLeap.length).toBe(366)
})
