import React from 'react'

const UserCard = ({profile}) => {
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
                <button className="btn btn-secondary">Dislike</button>
                <button className="btn btn-primary">Like</button>
            </div>
        </div>
    </div>
  )
}

export default UserCard