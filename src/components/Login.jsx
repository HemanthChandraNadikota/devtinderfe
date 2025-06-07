import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'

const Login = () => {

    const [email, setEmail] = useState('goldenberg@gmail.com')
    const [password, setPassword] = useState('goldenberg')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/login`, { email, password }, { withCredentials: true })
            console.log(response)
            dispatch(addUser(response.data.data))
            navigate('/feed')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="flex justify-center items-center mt-20"> 
    <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
            <h2 className="card-title">Login</h2>
            <div className="card-actions flex flex-col justify-center">
            <fieldset className="fieldset my-5 w-full">
                <legend className="fieldset-legend">Email</legend>
                <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Type here" />
                <legend className="fieldset-legend">Password</legend>
                <input type="text" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Type here" />
            </fieldset>
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login