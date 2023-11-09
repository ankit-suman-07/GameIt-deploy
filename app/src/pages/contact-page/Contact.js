import React, { useState } from 'react';
import "./Contact.css";
import Navbar from '../../components/user-navbar/UserNav';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        queryType: 'General Inquiry',
        query: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, such as sending the form data to the server
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <Navbar />

            <div className="contactus-outer">

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="queryType">Query Type:</label>
                        <select
                            id="queryType"
                            name="queryType"
                            value={formData.queryType}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Video Playback Issue">Video Playback Issue</option>
                            <option value="Titles Search Issue">Titles Search Issue</option>
                            <option value="Game Requests">Game Requests</option>
                            <option value="Inappropriate Content">Inappropriate Content</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="query">Query:</label>
                        <textarea
                            id="query"
                            name="query"
                            value={formData.query}
                            onChange={handleInputChange}
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
