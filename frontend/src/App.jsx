import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [prodcuts, setProducts] = useState([])
  const [error , setError]= useState(false)
  const [loading ,setLoading]= useState(false)

  useEffect(()=>{
    ;(async ()=>{
      try {
        setLoading(true)
        setError(false)
         const response = await axios.get('/api/products')
         setProducts(response.data)
      } catch (error) {
        setError(tue)
        setLoading(false)
      }
    })()
  })

  if (error ){
    return <h1>Something went wrongr</h1>
  }

  if (loading ){
    return <h1>Loading...</h1>
  }

  return (
    <>
    <h1>Number of products are : {prodcuts} </h1>
    </>
  )
}

export default App
