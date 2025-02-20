import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sign_up.css';

const SignUp = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here (e.g., API call)
    console.log('Role:', role);
    console.log('Name:', username);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Allow only 10-digit numbers
    if (/^\d{0,10}$/.test(value)) {
      setPhone(value);
    }
  };

  return (
    <div className="container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <p><small>Already a member? </small><span className='login_link'><Link to="/login" style={{ color: '#3685fb', textDecoration: 'none', fontWeight: 500 }} >Login</Link></span> </p>
        <br />
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select your role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your name"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
            value={phone}
            onChange={handlePhoneChange}
            maxLength="10" // Limit to 10 digits
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className='submit_button'>Submit</button>
          <button type="reset" >Reset</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
