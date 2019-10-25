import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-auto-flow: column;
  grid-template-areas:
    "day-label day"
    ". month-label";
`

export const DayLabelContainer = styled.div`
  grid-gap: 2px;
  display: grid;
  grid-area: day-label;
`

export const DayLabel = styled.div`
  height: 10px;
  font-size: 8px;
  padding-right: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const DayContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-gap: 2px;
  grid-auto-flow: column;
  grid-auto-columns: 10px 10px;
  grid-area: day;
`

export const Day = styled.div.attrs(({ color }) => ({
  style: {
    background: color ? color : "grey"
  }
}))`
  width: 10px;
  height: 10px;
`

export const Empty = styled.div`
  width: 10px;
  height: 10px;
  background: none;
`

export const MonthLabelContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  font-size: 8px;
  grid-area: month-label;
  grid-auto-columns: 51.2px;
  margin-top: 5px;
`

export const MonthLabel = styled.div`
  text-align: left;
`
