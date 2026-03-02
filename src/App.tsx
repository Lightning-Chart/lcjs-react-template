import { LCHost } from './LC'
import { MyChartComponent } from './Components/MyChartComponent'
import './App.css'

function App() {
  const data1 = genRandomData()
  const data2 = genRandomData()
  return (
    <LCHost>
      <div className="app">
        <MyChartComponent data={data1} />
        <MyChartComponent data={data2} />
      </div>
    </LCHost>
  )
}

const genRandomData = () => {
  const data: number[] = []
  let prev = 0
  for (let i = 0; i < 100_000; i++) {
    const y = prev + (Math.random() * 2 - 1)
    data.push(y)
    prev = y
  }
  return data
}

export default App
