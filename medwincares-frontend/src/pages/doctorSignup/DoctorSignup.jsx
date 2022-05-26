import React, { useState } from "react";
import "./doctorSignup.scss";
import axios from "axios";

const DoctorSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [phone, setPhone] = useState("");
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/doctor/register", {
        firstName,
        lastName,
        email,
        password,
        specialization,
        phone,
        passcode,
      });
      res.data && window.location.replace("/doctor/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="doctor-signup">
      <div className="doctor-signup-wrapper">
        <img
          src="http://localhost:3000/assets/images/medwin-cares.png"
          alt="hospital-logo"
          className="doctor-signup-image"
        />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First name"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last name"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Specialization"
            required
            onChange={(e) => setSpecialization(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone no."
            required
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Passcode"
            required
            onChange={(e) => setPasscode(e.target.value)}
          />
          <button type="submit">REGISTER</button>
        </form>
        {error && <p className="errorMsg">The email or phone is already registered!</p>} 
      </div>
    </div>
  );
};

export default DoctorSignup;
