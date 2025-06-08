import React, { useEffect } from 'react'
import { useState } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed, removeFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {

  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed)
  const user = useSelector((store) => store.user)

  const handleSendRequest = async (userId, status) => {
    try {
      const response = await axios.post(`${BASE_URL}/request/send/${status}/${userId}`,{}, {withCredentials: true})
      dispatch(removeFeed(userId))
    } catch (error) {
      console.log(error)
    }
  }

  const fetchProfiles = async () => {
    if(feed && feed.length > 0) {
      return
    }
    try {
      const response = await axios.get(`${BASE_URL}/feed`, { withCredentials: true })
      console.log(response.data.data)
      dispatch(addFeed(response.data.data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProfiles()
  }, [user])

  if(!feed) return 
  if(feed.length === 0) return <div className="flex justify-center items-center h-screen">
    <h1 className="text-2xl font-bold">No Users available on the platform to show</h1>
  </div>

  return (
    <div className="flex justify-center my-10">
      {feed && <UserCard profile={feed[0]} handleSendRequest={handleSendRequest} />}
    </div>
  )
}

export default Feed