import React, { useEffect } from 'react'
import { useState } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {

  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed)

  const fetchProfiles = async () => {
    if(feed) {
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
  }, [])

  return (
    <div className="flex justify-center my-10">
      {feed && <UserCard profile={feed[0]} />}
      {/* {feed && feed.map((profile) => <UserCard profile={profile} />)} */}
    </div>
  )
}

export default Feed