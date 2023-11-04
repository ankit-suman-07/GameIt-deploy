import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useSnackbar } from 'notistack';

import StudioNav from '../../../../components/studio-navbar/StudioNav';

const StudioCreateGame = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    //const { enqueueSnackbar } = useSnackbar();

    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };

        setLoading(true);
        axios
            .post('https://server-gameit.onrender.com/games/', data)
            .then(() => {
                setLoading(false);
                //enqueueSnackbar('Book Created Successfully', { variant: 'success' })
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                //enqueueSnackbar('Error', { variant: 'error' })
                //alert('An error happened. Please Check Connection');
                console.log(error);
            })
    };

    return (
        <div className='atudiocreategame-outer' >
            <StudioNav />
            <div className='main-area' >
                {
                    loading ? (
                        <div>Loading.....</div>
                    ) : (
                        <div className='box' >
                            <div className='edit-form' >
                                <label>Title</label>
                                <input
                                    type='text'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <label>Author</label>
                                <input
                                    type='text'
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                />
                                <label>Publish Year</label>
                                <input
                                    type='number'
                                    value={publishYear}
                                    onChange={(e) => setPublishYear(e.target.value)}
                                />

                                <button onClick={handleSaveBook} className='edit-btn' >
                                    Save
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default StudioCreateGame