import React from "react"
import interpolate from "interpolate-range"
import { getAllDays, dateToYMD, getColor } from "./utils"
import {
  Container,
  DayLabel,
  DayLabelContainer,
  DayContainer,
  Day,
  Empty,
  MonthLabelContainer,
  MonthLabel
} from "./calendar-heatmap.styles"

export interface Transaction {
  transactionType: string
  date: string
  amount: number
}

export interface TransactionsMap {
  [date: string]: number
}

interface Props {
  data: TransactionsMap
  year: number
}

export function CalendarHeatmap({ data, year }: Props) {
  return (
    <Container>
      <DayLabels />
      <Days data={data} year={year} />
      <MonthLabels />
    </Container>
  )
}

const DayLabels = () => {
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const dayLabels = DAYS.map((label: string) => (
    <DayLabel key={label}>{label}</DayLabel>
  ))
  return <DayLabelContainer>{dayLabels}</DayLabelContainer>
}

const MonthLabels = () => {
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]
  return (
    <MonthLabelContainer>
      {MONTHS.map((month: string, key) => (
        <MonthLabel key={key}>{month}</MonthLabel>
      ))}
    </MonthLabelContainer>
  )
}

const Days = ({ data, year }: Props) => {
  const days = getAllDays(year)
  const emptySpaces = days[0].getDay()
  const min = Math.min(...Object.values(data))
  const max = Math.max(...Object.values(data))

  const int = interpolate({
    inputRange: [min, max],
    outputRange: [0, 1],
    clamp: true
  })

  return (
    <DayContainer>
      {[...Array(emptySpaces)].map((_, key) => (
        <Empty key={key} />
      ))}
      {days.map((date, key) => {
        const dateYMD = dateToYMD(date)
        const amount = data[dateYMD]
        const color = amount !== undefined ? getColor(int(amount)) : ""
        const title = `${dateYMD} | ${Math.round(amount)}`

        return <Day key={key} title={title} color={color} />
      })}
    </DayContainer>
  )
}
