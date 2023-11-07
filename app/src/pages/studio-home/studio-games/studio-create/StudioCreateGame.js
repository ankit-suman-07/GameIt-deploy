import React, { useState, useContext } from 'react';
import axios from 'axios';
// import { useSnackbar } from 'notistack';
import "./StudioCreateGame.css";

import StudioNav from '../../../../components/studio-navbar/StudioNav';
import Upload from '../../../../components/upload-files/Upload';
import UploadVid from '../../../../components/upload-files/UploadVid';
import VideoPlayer from '../../../../components/video-player/VideoPlayer';

import { UserContext } from '../../../../context/UserContext';

const StudioCreateGame = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('Activision Blizzard');
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState('');
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState("");
    const [poster, setPoster] = useState("");
    const [trailer, setTrailer] = useState(""); //To be modified
    const [screenshots, setScreenshots] = useState([]);

    const [summary, setSummary] = useState("");
    //const [reviews, setReviews] = useState({});
    const [consoleDevice, setConsole] = useState([]);
    const [selectedConsole, setSelectedConsole] = useState([]);
    //const [type, setType] = useState('');

    const genre_tags = [
        "Action", "RPG", "ActionAdventure", "Adventure", "SuperHero",
        "Casual", "Fighting", "Horror", "Platformer", "Racing",
        "Shooter", "Simulator", "Sports", "Strategy"

    ];

    const console_devices = ["PlayStation 5", "Xbox Series X", "PC"];
    const { user } = useContext(UserContext);

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value); // Update selected genre when user selects an option
        setCompany(user.name);
    };

    const addGenre = () => {
        if (selectedGenre && !genre.includes(selectedGenre)) {
            setGenre([...genre, selectedGenre]); // Add selected genre to the array if not already present
            setSelectedGenre(''); // Reset selected genre after adding
        }
    };

    const handleConsoleChange = (e) => {
        setSelectedConsole(e.target.value); // Update selected genre when user selects an option
    };

    const addConsole = () => {
        if (selectedConsole && !consoleDevice.includes(selectedConsole)) {
            setConsole([...consoleDevice, selectedConsole]); // Add selected genre to the array if not already present
            setSelectedConsole(''); // Reset selected genre after adding
        }
    };

    const handleTagChange = (e) => {
        setSelectedTag(e.target.value); // Update selected tag when user types in the input field
    };

    const addTag = () => {
        if (selectedTag && !tags.includes(selectedTag)) {
            setTags([...tags, selectedTag]); // Add selected tag to the array if not already present
            setSelectedTag(''); // Reset selected tag after adding
        }
    };

    const handleAddScreenshot = (url) => {
        if (screenshots.length < 3) {
            setScreenshots([...screenshots, url]);
        }
    };

    const handleCreateUser = () => {
        const sendData = {
            name,
            company,
            year,
            genre,
            tags,
            price,
            sold: 0,
            rating,
            poster,
            trailer,
            screenshots,
            summary,
            reviews: {},
            consoleDevice,
            likes: 0,
            plan: ""
        };
        console.log(sendData);
        axios
            .post('http://localhost:5000/games', sendData)
            .then((response) => {
                console.log('User created successfully:', response.data);
                console.log(sendData);
                // Handle success, e.g., show a success message to the user
            })
            .catch((error) => {
                console.error('Error creating user:', error);
                // Handle error, e.g., show an error message to the user
            });
    };

    return (
        <div className='demo-demo' >
            <StudioNav />
            <h2>Create a New User</h2>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Company:</label>
                <input type="text" value={user.name} disabled onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div>
                <label>Year:</label>
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            <div>
                <label>Genre:</label>

                <select onChange={handleGenreChange}>
                    <option value="">Select Genre</option>
                    {
                        genre_tags.map((item, idx) => {
                            return <option key={idx} value={item}>{item}</option>
                        })
                    }


                    {/* Add more genre options as needed */}
                </select>
                <button onClick={addGenre}>Add Genre</button>
                <div>
                    <strong>Selected Genres:</strong> {genre.join(', ')}
                </div>
            </div>

            <div>
                <label>Tags:</label>
                <input
                    type="text"
                    value={selectedTag}
                    onChange={handleTagChange}
                    placeholder="Enter a tag"
                />
                <button onClick={addTag}>Add Tag</button>
                <div>
                    <strong>Selected Tags:</strong> {tags.join(', ')}
                </div>
            </div>

            <div>
                <label>Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label>Rating:</label>
                <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
            </div>
            <div>
                Poster
                <Upload setImage={setPoster} />
                {
                    poster && <div>
                        <img src={poster}
                            alt="cloudinary"
                        />
                    </div>
                }
            </div>

            <div>
                Trailer
                <UploadVid setTrailer={setTrailer} />
                {
                    trailer && <div>
                        <VideoPlayer low={trailer} mid={trailer} high={trailer} />

                    </div>
                }

            </div>
            Screenshots ---

            <div>
                Screenshots:
                <Upload setImage={handleAddScreenshot} />
                <Upload setImage={handleAddScreenshot} />
                <Upload setImage={handleAddScreenshot} />
                {screenshots.map((screenshot, index) => (
                    <div key={index}>
                        <img src={screenshot} alt={`screenshot-${index}`} />
                    </div>
                ))}
            </div>
            <div>
                <label>Summary:</label>
                <input type="text" value={summary} onChange={(e) => setSummary(e.target.value)} />
            </div>

            <div>
                <label>Console:</label>

                <select onChange={handleConsoleChange}>
                    <option value="">Select Console</option>
                    {
                        console_devices.map((item) => {
                            return <option value={item}> {item} </option>
                        })
                    }


                </select>
                <button onClick={addConsole}>Add Console</button>
                <div>
                    <strong>Selected Genres:</strong> {consoleDevice.join(', ')}
                </div>
            </div>

            <button onClick={handleCreateUser}>Create User</button>
        </div>
    );
};

export default StudioCreateGame