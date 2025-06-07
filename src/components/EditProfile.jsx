import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import UserCard from './UserCard'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'


const EditProfile = ({user}) => {
    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [about, setAbout] = useState(user.about)
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl)
    const [age, setAge] = useState(user.age)
    const [gender, setGender] = useState(user.gender)
    const [errorMessage, setErrorMessage] = useState('')
    const [showToast, setShowToast] = useState(false)
    const dispatch = useDispatch()


    const handleUpdate = async () => {
        setErrorMessage('')
        try {
            const response = await axios.patch(`${BASE_URL}/profile/edit`, {firstName, lastName, about, photoUrl, age, gender}, {withCredentials: true})
            dispatch(addUser(response.data.user))
            setShowToast(true)
            setTimeout(() => {
                setShowToast(false)
            }, 3000)
        } catch (error) {
            setErrorMessage(error?.response?.data)
        }
    }

    return (
        <>
            <div className="flex flex-row justify-center items-center gap-10">
                <div className="flex justify-center items-center mt-10"> 
                    <div className="card card-border bg-base-300 w-96">
                        <div className="card-body">
                            <h2 className="card-title">Edit Profile</h2>
                            <div className="card-actions flex flex-col justify-center">
                            <fieldset className="fieldset my-5 w-full">
                                <legend className="fieldset-legend">First Name</legend>
                                <input type="text" className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                <legend className="fieldset-legend">Last Name</legend>
                                <input type="text" className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                <legend className="fieldset-legend">About</legend>
                                <textarea className="textarea textarea-bordered" value={about} onChange={(e) => setAbout(e.target.value)}  />
                                <legend className="fieldset-legend">Photo URL</legend>
                                <input type="text" className="input" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)}  />
                                <legend className="fieldset-legend">Age</legend>
                                <input type="text" className="input" value={age} onChange={(e) => setAge(e.target.value)}  />
                                <legend className="fieldset-legend">Gender</legend>
                                <select className="select select-bordered" value={gender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                            </fieldset>
                            <p className="text-red-500">{errorMessage}</p>
                            <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
                <UserCard profile={{firstName, lastName, about, photoUrl, age, gender}} />
                {showToast && <div className="toast toast-top toast-center">
                    <div className="alert alert-success">
                        <span>Profile updated successfully.</span>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default EditProfile