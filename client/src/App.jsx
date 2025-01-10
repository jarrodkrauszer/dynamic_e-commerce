import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { UPDATE_USER, UPDATE_COMPANY_INFO } from "./utils/actions"

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

import Auth from "./pages/Auth";
import Landing from './pages/Landing'

import { useStoreContext } from "./utils/store"

import axios from 'axios'

function App() {
  const [state, dispatch] = useStoreContext();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!state.company) {
      axios.get('/api/company')
        .then(res => {
          if (res.data[0]) {
            dispatch({
              type: UPDATE_COMPANY_INFO,
              company: res.data[0]
            })
          }
        })
        .catch(error => {
          console.error('Error fetching company data:', error);
        })
    }

    axios.get('/auth/authenticate')
      .then(res => {
        if (res.data.user) {
          dispatch({
            type: UPDATE_USER,
            user: res.data.user
          })
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
    setLoading(false)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="/register" element={<Auth isLogin={false} />} />
          <Route path="/login" element={<Auth isLogin={true} />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
