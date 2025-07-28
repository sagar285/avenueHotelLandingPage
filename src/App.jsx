import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import HotelApp from './Component/HotelApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
     <HotelApp/>
     </Provider>
    </>
  )
}

export default App
