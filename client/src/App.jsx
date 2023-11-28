import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

import { useStoreContext } from "./utils/store";

import axios from 'axios'

function App() {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    axios.get('/auth/authenticate')
      .then(res => {
        console.log(res.data.user)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
  }, [])

  return (
    <>
      <Header />
      <main>

      </main>
      <Footer />
    </>
  )
}

export default App
