import React from 'react'
import "./App.css"
import Card from './components/Card'
import { Cities } from './data/data'


const App = () => {

  console.log(Cities)
  return (
    <div className='app'>
      {Cities.map((Niger)=>
        <Card title={Niger.city}
        desc={Niger.desc}
        img ={Niger.img} />
      )}

    

    </div>
  )
}

export default App