import React, { useState, useEffect } from 'react';
import axios from 'axios';

const People = ({ apiDomain, apiEndpoint }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${apiDomain}${apiEndpoint}`);
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [apiDomain, apiEndpoint]);

  const openModal = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded-lg p-4">
            <img
              src={user.image}
              alt={user.firstName}
              className="w-full h-auto rounded-lg cursor-pointer"
              onClick={() => openModal(user)}
            />
            <p className="font-bold">{`${user.firstName} ${user.lastName}`}</p>
          </div>
        ))}
      </div>

      {selectedUser && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
    <div className="modal-container border-4 border-violet-500 bg-white rounded-lg p-8 max-w-3xl">
      <h2 className="text-2xl font-bold mb-4">
        {`${selectedUser.firstName} ${selectedUser.lastName}`}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>
            <strong>Email:</strong> {selectedUser.email}
          </p>
          <p>
            <strong>Phone:</strong> {selectedUser.phone}
          </p>
          <p>
            <strong>Username:</strong> {selectedUser.username}
          </p>
          <p>
            <strong>Gender:</strong> {selectedUser.gender}
          </p>
          <p>
            <strong>Age:</strong> {selectedUser.age}
          </p>
          {/* Add more user information as needed */}
        </div>
        <div>
          <img
            src={selectedUser.image}
            alt={selectedUser.firstName}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Address</h3>
        <p>{selectedUser.address.address}</p>
        <p>{selectedUser.address.city}</p>
        <p>{selectedUser.address.state}</p>
        <p>{selectedUser.address.postalCode}</p>
      </div>
      {/* Add more user information sections as needed */}
      <button
        className="mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600"
        onClick={closeModal}
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default People;
