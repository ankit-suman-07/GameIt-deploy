import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [year, setYear] = useState('');
    //const [type, setType] = useState('');

    const handleCreateUser = () => {
        axios
            .post('https://server-gameit.onrender.com/games', {
                name: name,
                company: company,
                year: year,
            })
            .then((response) => {
                console.log('User created successfully:', response.data);
                // Handle success, e.g., show a success message to the user
            })
            .catch((error) => {
                console.error('Error creating user:', error);
                // Handle error, e.g., show an error message to the user
            });
    };

    return (
        <div>
            <h2>Create a New User</h2>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            {/* <div>
                <label>Type:</label>
                <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
            </div> */}
            <button onClick={handleCreateUser}>Create User</button>
        </div>
    );
};

export default CreateUser;
