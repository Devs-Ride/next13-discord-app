// const RegisterPage = () => {
//     return ( 
//         <div>
//             Register page!
//         </div>
//      );
// }
 
// export default RegisterPage;

import React, { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
  email: string;
  displayName: string;
  username: string;
  password: string;
  dateOfBirth: string;
  agreeToEmails: boolean;
};

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    displayName: '',
    username: '',
    password: '',
    dateOfBirth: '',
    agreeToEmails: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={{ backgroundColor: '#5865F2', padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="displayName"
          placeholder="Display Name"
          value={formData.displayName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
        <label>
          <input
            type="checkbox"
            name="agreeToEmails"
            checked={formData.agreeToEmails}
            onChange={handleChange}
          />
          It`&apos;` okay to send me emails with Discord updates, tips, and
          special offers. You can opt out at any time.
        </label>
        <button
          type="submit"
          style={{ backgroundColor: '#5865F2', color: 'white' }}
        >
          Continue
        </button>
      </form>
      <small>
        By registering, you agree to{' '}
        <a href="/terms-of-service" style={{ color: 'white' }}>
          Discord`&apos;` Terms of Service
        </a>
        and
        <a href="/privacy-policy" style={{ color: 'white' }}>
          Privacy Policy
        </a>
        .
      </small>
      <p>
        <a href="/login" style={{ color: 'white' }}>
          Already have an account?
        </a>
      </p>
    </div>
  );
};

export default RegistrationForm;
