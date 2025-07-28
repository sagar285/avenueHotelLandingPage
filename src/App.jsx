import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import HotelApp from './Component/HotelApp'
import InstallAppButton from './InstallAppButton'

function App() {
  return (
    <Provider store={store}>
      <HotelApp />
      <InstallAppButton />
    </Provider>
  )
}

export default App
