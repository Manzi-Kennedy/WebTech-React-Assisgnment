import React, { useState } from 'react'
import LibraryButton from './LibraryButton'

function LibraryLogin() {

  const [doYouHaveAnAccount, setDoYouHaveAnAccount] = useState(true);
  const [userName, setUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [studentId, setStudentId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    alert("UserName: " + userName + "\nPassword: " + loginPassword);
  }

  const handleRegister = () => {
    alert("Student ID: " + studentId + "\nEmail: " + email + "\nPassword: " + password + "\nConfirm Password: " + confirmPassword);
  }

  return (
    <>
      {doYouHaveAnAccount ? (
        <div style={{ border: "3px solid blue", marginTop: "190px" }}>
          <label>UserName:</label>
          <input type="text" placeholder='Enter Your username' value={userName} onChange={(e) => setUserName(e.target.value)} /><br />
          <label>Password:</label>
          <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} /><br />
          <LibraryButton buttonLabel="LOGIN" onClick={handleLogin} /> <br />
          <label>New here? </label> <LibraryButton buttonLabel="Create Account" onClick={() => setDoYouHaveAnAccount(false)} />
        </div>
      ) : (
        <div style={{ border: "3px solid indigo", marginTop: "190px" }}>
          <label>Student ID:</label>
          <input type="text" placeholder='Enter Your Student ID' value={studentId} onChange={(e) => setStudentId(e.target.value)} /><br />
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br />
          <LibraryButton buttonLabel="CREATE ACCOUNT" onClick={handleRegister} /> <br />
          <label>Already have an account?? </label> <LibraryButton buttonLabel="Sign In" onClick={() => setDoYouHaveAnAccount(true)} />
        </div>
      )}
    </>
  )
}

export default LibraryLogin