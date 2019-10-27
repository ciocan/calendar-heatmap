import { Transaction, TransactionsMap } from "./calendar-heatmap"

export const listToMap = (list: Transaction[]): TransactionsMap => {
  const map: TransactionsMap = {}

  list.forEach((transaction: Transaction) => {
    const amount =
      transaction.transactionType === "success"
        ? +transaction.amount
        : -transaction.amount

    map[transaction.date] =
      map[transaction.date] !== undefined
        ? map[transaction.date] + amount
        : amount
  })

  return map
}

export const getAllDays = (year: number) => {
  const start = new Date(`01/01/${year}`)
  const end = new Date(`12/31/${year}`)
  const days = []

  for (var d = start; d <= end; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d))
  }

  return days
}

export const getColor = (value: number) => {
  const hue = (value * 120).toString(10)
  return `hsl(${hue},100%,50%)`
}

export const dateToYMD = (date: Date) => {
  const d = date.getDate()
  const m = date.getMonth() + 1
  const Y = date.getFullYear()
  const M = m <= 9 ? "0" + m : m
  const D = d <= 9 ? "0" + d : d
  return `${Y}-${M}-${D}`
}
