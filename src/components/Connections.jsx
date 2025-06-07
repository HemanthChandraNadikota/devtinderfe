import React,{useState, useEffect} from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import UserCard from './UserCard'
import { useDispatch, useSelector } from 'react-redux'
import { setConnections } from '../utils/connectionSlice'

const Connections = () => {

  const connections = useSelector((store) => store.connection)
  const dispatch = useDispatch()

  const getConnections = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/connections`, {withCredentials: true})
      dispatch(setConnections(response.data.data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getConnections()
  },[])

  if(!connections) return 
  if(connections.length === 0) return <div className="flex justify-center items-center h-screen">
    <h1 className="text-2xl font-bold">No connections found</h1>
  </div>

  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-10 gap-y-10">
      {connections && connections.map((connection)=>(
        <UserCard key={connection._id} profile={connection} from="connections" />
      ))}
    </div>
  )
}

export default Connections