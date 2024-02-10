// let's create the user profile componenet
import './index.css'
// Name of the component start with capital latter
// we are accesing the user details from app.js
const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role} = userDetails
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
