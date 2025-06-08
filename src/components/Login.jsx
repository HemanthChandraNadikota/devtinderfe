import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [isLoginForm, setIsLoginForm] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/login`, { email, password }, { withCredentials: true })
            console.log(response)
            dispatch(addUser(response.data.data))
            navigate('/feed')
        } catch (error) {
            setErrorMessage(error?.response?.data)
            console.log(error)
        }
    }

    const handleSignup = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/signup`, { email, password, firstName, lastName }, { withCredentials: true })
            dispatch(addUser(response?.data?.data))
            return navigate('/profile')
        } catch (error) {       
            setErrorMessage(error?.response?.data)
            console.log(error)
        }
    }

  return (
    <div className="flex justify-center items-center mt-20"> 
    <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
            <h2 className="card-title">{isLoginForm ? "Login" : "Signup"}</h2>
            <div className="card-actions flex flex-col justify-center">
            <fieldset className="fieldset my-5 w-full">
                <legend className="fieldset-legend">Email</legend>
                <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Type here" />
                {!isLoginForm && <>
                    <legend className="fieldset-legend">First Name</legend>
                    <input type="text" className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Type here" />
                    <legend className="fieldset-legend">Last Name</legend>
                    <input type="text" className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Type here" />
                </>}
                <legend className="fieldset-legend">Password</legend>
                <input type="text" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Type here" />
            </fieldset>
            <p className="text-red-500">{errorMessage}</p>
            <button className="btn btn-primary" onClick={isLoginForm ? handleLogin : handleSignup}>{isLoginForm ? "Login" : "Signup"}</button>
            </div>
            <p className="text-sm text-gray-500">
                {isLoginForm ? "Don't have an account? " : "Already have an account? "}
                <span className="text-blue-500 cursor-pointer ml-2" onClick={()=>setIsLoginForm(!isLoginForm)}>{isLoginForm ? "Signup" : "Login"}</span>
            </p>
        </div>
    </div>
    </div>
  )
}

export default Login