import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { useSnackbar } from 'notistack';

import StudioNav from '../../../../components/studio-navbar/StudioNav';
import Upload from '../../../../components/upload-files/Upload';
import UploadVid from '../../../../components/upload-files/UploadVid';
import VideoPlayer from '../../../../components/video-player/VideoPlayer';

const StudioEditGame = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState('');
    const [price, setPrice] = useState(0);
    const [sold, setSold] = useState(0);
    const [rating, setRating] = useState("");
    const [poster, setPoster] = useState("");
    const [trailer, setTrailer] = useState(""); //To be modified
    const [screenshots, setScreenshots] = useState([]);

    const [summary, setSummary] = useState("");
    const [reviews, setReviews] = useState({});
    const [consoleDevice, setConsole] = useState([]);
    const [selectedConsole, setSelectedConsole] = useState([]);
    const [likes, setLikes] = useState(0);

    const { id } = useParams();

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value); // Update selected genre when user selects an option
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

    useEffect(() => {
        //setLoading(true);
        axios
            .get(`http://localhost:5000/games/${id}`)
            .then((response) => {
                console.log(id);
                setName(response.data.name);
                setCompany(response.data.company);
                setYear(response.data.year);
                setGenre(response.data.genre);
                setTags(response.data.tags);
                setPrice(response.data.price);
                setSold(response.data.sold);
                setRating(response.data.rating);
                setPoster(response.data.poster);
                setTrailer(response.data.trailer);
                setScreenshots(response.data.screenshots);
                setSummary(response.data.summary);
                setReviews(response.data.reviews);
                setConsole(response.data.consoleDevice);
                setLikes(response.data.likes);
                console.log(response.data);
            })
            .catch((error) => {
                //setLoading(false);
                alert('An error occured. Please check the console.');
                console.log(error);
            })
    }, [id])

    const handleEditUser = () => {
        const sendData = {
            name,
            company,
            year,
            genre,
            tags,
            price,
            sold,
            rating,
            poster,
            trailer,
            screenshots,
            summary,
            reviews,
            consoleDevice,
            likes
        };
        axios
            .put(`http://localhost:5000/games/${id}`, sendData)
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
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div>
                <label>Year:</label>
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            <div>
                <label>Genre:</label>

                <select onChange={handleGenreChange}>
                    <option value="">Select Genre</option>
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="RPG">RPG</option>
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
                    <option value="PC">PC</option>
                    <option value="PS4">PS4</option>
                    <option value="XBOX">XBOX</option>
                    {/* Add more genre options as needed */}
                </select>
                <button onClick={addConsole}>Add Console</button>
                <div>
                    <strong>Selected Genres:</strong> {consoleDevice.join(', ')}
                </div>
            </div>

            <button onClick={handleEditUser}>Edit User</button>
        </div>
    );
};

export default StudioEditGame