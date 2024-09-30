import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(localStorage.getItem("userName") || "");
  const [email, setEmail] = useState(localStorage.getItem("userEmail") || "");
  const [password, setPassword] = useState("password");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //
  const handleLogout = () => {
    // Mock logout functionality
    navigate("/login");
  };

  // function that handle the details save by users
  const handleSave = () => {
    // Save user details to localStorage
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    setIsEditing(false);
    alert("Account information updated!");
  };

  // function to handle change Password
  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setPassword(newPassword);
    setNewPassword("");
    setConfirmPassword("");
    alert("Password changed successfully!");
  };

  // using useEffect to Load user details from localStorage
  useEffect(() => {
    setName(localStorage.getItem("userName") || "");
    setEmail(localStorage.getItem("userEmail") || "");
  }, []);

  return (
    <div className="account-page">
      <h2>Account Information</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          disabled={!isEditing}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          disabled={!isEditing}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          disabled
        />
      </div>
      {isEditing && (
        <>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </>
      )}
      {!isEditing ? (
        <>
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-primary mt-2"
          >
            Edit
          </button>
          <button className="btn btn-danger mt-2" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <button onClick={handleSave} className="btn btn-success mt-2">
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="btn btn-secondary mt-2 ms-2"
          >
            Cancel
          </button>
          <button
            onClick={handleChangePassword}
            className="btn btn-warning mt-2 ms-2"
          >
            Change Password
          </button>
        </>
      )}
    </div>
  );
};

export default Account;
