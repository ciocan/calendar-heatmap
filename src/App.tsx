import React from "react"
import "./App.css"
import { CalendarHeatmap } from "./components/CalendarHeatmap/calendar-heatmap"
import transactionsList from "./data/evezy-transactions.json"
import { listToMap } from "./components/CalendarHeatmap/utils"

const transactions = listToMap(transactionsList)

const App: React.FC = () => {
  return (
    <div className="App">
      <CalendarHeatmap data={transactions} year={2019} />
    </div>
  )
}

export default App
