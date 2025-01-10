import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'

import { UPDATE_USER } from "../../utils/actions";

import React from "react";
import { useState } from "react";

import { useStoreContext } from "../../utils/store";

import './auth.scss'

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

function Auth({ isLogin }) {
  const [state, dispatch] = useStoreContext();
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  // const [authenticateUser] = useMutation(isLogin ? LOGIN : REGISTER, {
  //   variables: formData,
  // });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const route = isLogin ? "login" : "register";

      const userData = await axios.post(`/auth/${route}`, formData)

      setFormData({ ...initialFormData });

      dispatch({
        type: UPDATE_USER,
        user: userData.data,
      });

      setErrorMessage("");
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setErrorMessage(err.message);
    }
  };

  return (
    <>
      <div className="auth-container">
        <img
          style={{ filter: "invert(1)" }}
          className=""
          src={`/images/${state.company?.image}`}
          alt="Your Company"
        />
        <div className="auth-heading">
          <h2 className="text-center">
            {isLogin ? "Sign in to your account" : "Register"}
          </h2>
          {errorMessage && (
            <p className="">{errorMessage}</p>
          )}
        </div>


        <form
          onSubmit={handleSubmit}
          className="auth-form"
          action="#"
          method="POST"
        >
          {!isLogin ? (
            <>
              <div className='name-inputs mb-1'>
                <label
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <div className="">
                  <input
                    id="firstName"
                    onChange={handleInputChange}
                    name="firstName"
                    value={formData.firstName}
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="mb-1">
                <label
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <div>
                  <input
                    id="lastName"
                    onChange={handleInputChange}
                    name="lastName"
                    value={formData.lastName}
                    type="text"
                    required
                  />
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          <div className='email-input mb-1'>
            <label
              htmlFor="email"
            >
              Email address
            </label>
            <div>
              <input
                id="email"
                onChange={handleInputChange}
                name="email"
                value={formData.email}
                type="email"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <div>
              <input
                id="password"
                onChange={handleInputChange}
                name="password"
                value={formData.password}
                type="password"
                autoComplete="current-password"
                required
              />
            </div>
          </div>

          <div className='row justify-center mt-1'>
            <button
              type="submit"
              className="submit-btn"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

    </>
  );
}

export default Auth;
