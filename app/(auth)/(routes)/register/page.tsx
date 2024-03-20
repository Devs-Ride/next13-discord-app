'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles for react-datepicker
import './app.css';

type FormData = {
  email: string;
  displayName: string;
  username: string;
  password: string;
  dateOfBirth: Date | null; // Change the type to Date
  agreeToEmails: boolean;
};

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    displayName: '',
    username: '',
    password: '',
    dateOfBirth: null,
    agreeToEmails: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement> | Date) => {
    const { name, value, type, checked } = e as ChangeEvent<HTMLInputElement>;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData((prev) => ({ ...prev, dateOfBirth: date }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2 className="form-title">Sign Up</h2>
        {['email', 'displayName', 'username', 'password'].map(
          (field, index) => (
            <input
              key={index}
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={handleChange}
              className="form-field"
              autoComplete="off"
            />
          )
        )}
        <div className="form-field">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <br />
          <DatePicker
            id="dateOfBirth"
            selected={formData.dateOfBirth}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className="form-date-picker"
            placeholderText="Select Date"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={15}
            autoComplete="off"
          />
        </div>
        <div className="agreement-label">
          <input
            type="checkbox"
            name="agreeToEmails"
            checked={formData.agreeToEmails}
            onChange={handleChange}
            className="agreement-checkbox"
          />
          I agree to receive emails with updates, tips, and offers.
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
