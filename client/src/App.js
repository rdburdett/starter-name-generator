import React, { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState([])

  useEffect(() => {
    fetch('https://name-generation-app-client.herokuapp.com/')
      .then((res) => res.json())
      .then((nme) => setName([nme]))
  }, [])

  return (
    <h1>{name}</h1>
  )
}

export default App
