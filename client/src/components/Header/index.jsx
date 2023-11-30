import axios from 'axios'
import './header.scss'

import { NavLink, useNavigate } from 'react-router-dom'

import { useStoreContext } from "../../utils/store";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY, UPDATE_USER } from '../../utils/actions';
import { useEffect } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const [state, dispatch] = useStoreContext();
  const navigate = useNavigate()

  const logout = async (e) => {
    e.preventDefault()
    try {
      await axios.get('/auth/logout')

      dispatch({
        type: UPDATE_USER,
        user: null
      })
      navigate('/')
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    axios.get('/api/categories')
      .then(res => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: res.data
        })
      })
  }, [])

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    })
  }

  const navigation = state?.categories || []

  return (
    <header className="row align-center justify-space-between">
      <div >
        <NavLink to='/' className='row align-center center-text'>
          {state.company && (
            <img className='logo' src={`/images/${state.company.image}`} alt="Your Company" />
          )}
        </NavLink>
      </div>

      <div className="row justify-center align-center center-text align-self">
        {navigation.map(item => (
          <NavLink
            key={item._id}
            to='/products'
            onClick={() => {
              handleClick(item._id)
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="login-header row align-center center-text">
        {state.user ? (
          <>
            <p className='welcome'>
              Welcome, {state.user.firstName}
            </p>
            <NavLink
              to='/logout'
              onClick={logout}
            >
              Log Out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to='/login'>Sign In</NavLink>
            <span>or</span>
            <NavLink to='/register'>Register</NavLink>
          </>
        )}

      </div>
    </header>
  )
}

export default Header