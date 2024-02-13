import React from "react";
import { useLocation} from "react-router-dom";
import "../css/profile.css";

const Profile = () => {
  const location = useLocation();

  if (!location.state) {
    return (
        <h2 className="error-message">Error: Profile details not found</h2>
    );
  }
  
  const { firstName, lastName, email } = location.state;

  return (
    <div className="profile-container">
      <div className="welcome-message">
        <p>Welcome, {firstName}</p>
      </div>
      <div className="profile-details">
        <div className="profile-card">
          <h2 className="profile-title">Profile Details</h2>
          <div className="detail-item">
            <strong>First Name:</strong> {firstName}
          </div>
          <div className="detail-item">
            <strong>Last Name:</strong> {lastName}
          </div>
          <div className="detail-item">
            <strong>Email:</strong> {email}
          </div>
          <div className="detail-item">
            <strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
