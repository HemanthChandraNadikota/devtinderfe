import React from 'react'

const UserCard = ({profile, from = "everywhere", reviewRequest, requestId, handleSendRequest}) => {
  const {firstName, lastName, about, photoUrl, age, gender} = profile
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
            <img
            src={photoUrl}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{firstName} {lastName}</h2>
            <p>{about}</p>
            <p>{gender}     {age}</p>
            <div className="card-actions justify-between">
                {from === "everywhere" && <button className="btn btn-secondary" onClick={()=>handleSendRequest(profile._id, "ignored")}>Ignore</button>}
                {from === "everywhere" && <button className="btn btn-primary" onClick={()=>handleSendRequest(profile._id, "interested")}>Interested</button>}
                {from === "requests" && <button className="btn btn-success" onClick={()=>reviewRequest(requestId, "accepted")}>Accept</button>}
                {from === "requests" && <button className="btn btn-error" onClick={()=>reviewRequest(requestId, "rejected")}>Reject</button>}
                {from === "connections" && <button className="btn btn-secondary">Remove</button>}
            </div>
        </div>
    </div>
  )
}

export default UserCard