import React from 'react'
import Navbar from './components/Navbar/Navbar'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/cart' element = {<Cart/>} />
        <Route path = '/oder' element = {<PlaceOrder/>} />

      </Routes>
      <img src=''/>
    </div>
  )
}

export default App
