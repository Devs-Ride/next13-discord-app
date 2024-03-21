'use client';
import React, { useState } from 'react';
import './app.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    displayName: '',
    username: '',
    password: '',
    dateOfBirth: '',
    agreeToEmails: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ? ''
      : 'Invalid';
    tempErrors.displayName = formData.displayName ? '' : 'Required';
    tempErrors.username = formData.username ? '' : 'Required';
    tempErrors.password = formData.password.length >= 6 ? '' : 'Required';
    tempErrors.dateOfBirth = formData.dateOfBirth ? '' : 'Required';

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // Reset the form
      setFormData({
        email: '',
        displayName: '',
        username: '',
        password: '',
        dateOfBirth: '',
        agreeToEmails: false,
      });
    }
  };

  // Error class
  const determineErrorClass = (fieldName) => {
    return errors[fieldName] ? 'input-error' : '';
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2 className="form-title">Sign Up</h2>
        {/* Email Field */}
        <div className="input-group">
          <input
            type="text"
            name="email"
            placeholder={`Email ${errors.email ? '*' : ''}`}
            value={formData.email}
            onChange={handleChange}
            className={`form-field ${determineErrorClass('email')}`}
            autoComplete="off"
          />
        </div>
        {/* Display Name Field */}
        <div className="input-group">
          <input
            type="text"
            name="displayName"
            placeholder={`Display Name ${errors.displayName ? '*' : ''}`}
            value={formData.displayName}
            onChange={handleChange}
            className={`form-field ${determineErrorClass('displayName')}`}
            autoComplete="off"
          />
        </div>
        {/* Username Field */}
        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder={`Username ${errors.username ? '*' : ''}`}
            value={formData.username}
            onChange={handleChange}
            className={`form-field ${determineErrorClass('username')}`}
            autoComplete="off"
          />
        </div>
        {/* Password Field */}
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder={`Password ${errors.password ? '*' : ''}`}
            value={formData.password}
            onChange={handleChange}
            className={`form-field ${determineErrorClass('password')}`}
            autoComplete="off"
          />
        </div>
        {/* Date of Birth Field */}
        <div className="input-group">
          <label htmlFor="dateOfBirth" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className={`form-field ${determineErrorClass('dateOfBirth')}`}
          />
        </div>
        {/* Agreement Checkbox */}
        <div className="agreement-label">
          <input
            type="checkbox"
            id="agreeToEmails"
            name="agreeToEmails"
            checked={formData.agreeToEmails}
            onChange={handleChange}
            className="agreement-checkbox"
          />
          <label htmlFor="agreeToEmails">
            I agree to receive emails with updates, tips, and offers.
          </label>
        </div>
        <button type="submit" className="form-button">
          Register
        </button>
        <p className="form-small-text">
          By registering, you agree to the{' '}
          <a href="/terms" className="link">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="link">
            Privacy Policy
          </a>
          .
        </p>
        <p className="form-small-text">
          Already have an account?{' '}
          <a href="/login" className="link">
            Log in
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
