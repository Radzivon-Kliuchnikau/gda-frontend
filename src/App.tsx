import { useState } from 'react'
import './App.css'

enum DataLoadState {
  NotLoaded,
  Loading,
  Loaded,
  Error
}

function App() {
  const [dataLoadState, setDataLoadState] = useState<DataLoadState>(DataLoadState.NotLoaded);
  const [data, setData] = useState([]);
  return (
    <>
      
    </>
  )
}

export default App
