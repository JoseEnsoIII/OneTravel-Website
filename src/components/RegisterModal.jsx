import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { RiCloseLine } from 'react-icons/ri';

ReactModal.setAppElement('#root');

function RegisterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roleId, setRoleId] = useState('');
  const [branchId, setBranchId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleIdChange = (e) => {
    setRoleId(e.target.value);
  };

  const handleBranchIdChange = (e) => {
    setBranchId(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleMobileNoChange = (e) => {
    setMobileNo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the request body
    const requestBody = {
      email,
      password,
      roleId,
      branchId,
      firstName,
      lastName,
      gender,
      mobileNo,
    };

    try {
      // Send the POST request
      const response = await fetch('http://127.0.0.1:5173/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      // Check the response status
      if (response.ok) {
        // Registration successful, reset the form
        setEmail('');
        setPassword('');
        setRoleId('');
        setBranchId('');
        setFirstName('');
        setLastName('');
        setGender('');
        setMobileNo('');

        // Close the modal
        onClose();
      } else {
        // Registration failed, handle the error
        // You can display an error message or perform any necessary action here
      }
    } catch (error) {
      // Handle any network or server errors
      // You can display an error message or perform any necessary action here
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="modal-overlay fixed inset-0 flex justify-center items-center"
      className="modal-content bg-white rounded-lg overflow-hidden shadow-lg w-300"
    >
      <form onSubmit={handleSubmit} className="w-full">
        <div className="modal-header bg-black py-2 px-4 w-full">
          <h2 className="text-xl font-bold text-white flex items-center justify-between">
            Registration
            <button
              className="close-button text-white text-lg ml-2 p-1 rounded-full bg-gray-500 hover:bg-gray-700"
              onClick={onClose}
            >
              <RiCloseLine />
            </button>
          </h2>
        </div>
        <div className="modal-body p-4">
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="first_name"
              placeholder="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="last_name"
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="role_id"
              placeholder="Role ID"
              value={roleId}
              onChange={handleRoleIdChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="branch_id"
              placeholder="Branch ID"
              value={branchId}
              onChange={handleBranchIdChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          
          <div className="mb-4">
            <input
              type="text"
              id="gender"
              placeholder="Gender"
              value={gender}
              onChange={handleGenderChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="mobile_no"
              placeholder="Mobile No"
              value={mobileNo}
              onChange={handleMobileNoChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w- bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </div>
      </form>
    </ReactModal>
  );
}

export default RegisterModal;
