import React,{useState, useEffect} from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import UserCard from './UserCard'
import { useDispatch, useSelector } from 'react-redux'
import { setRequests, removeRequest } from '../utils/requestSlice'

const Requests = () => {
    const requests = useSelector((store) => store.request)
    const dispatch = useDispatch()

    const getRequests = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/user/requests/received`, {withCredentials: true})
            dispatch(setRequests(response.data.connectionRequests))
        } catch (error) {
            console.log(error)
        }
    }

    const reviewRequest = async (requestId, action) => {
        try {
            const response = await axios.post(`${BASE_URL}/request/review/${action}/${requestId}`,{}, {withCredentials: true})

            dispatch(removeRequest(requestId))

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getRequests()
    },[])

    if(!requests) return 
    if(requests.length === 0) return <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">No requests found</h1>
    </div>

    return (
        <div className="flex flex-col gap-4 justify-center items-center mt-10 gap-y-10">
            {requests && requests.map((request)=>(
                <UserCard key={request._id} profile={request.fromUserId} requestId={request._id} from="requests" reviewRequest={reviewRequest} />
            ))}
        </div>
    )
}

export default Requests