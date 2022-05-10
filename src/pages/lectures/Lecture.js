import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import TextInput from '../../components/TextInput';
import SimpleBackdrop from '../../components/SimpleBackdrop'
import { useParams } from "react-router-dom";
import './lecture.css';

export default function Lecture() {
    const [lectureData, setLectureData] = useState({ description: '', title: '', url: '' });
    const [errors, setErrors] = useState();
    const [openLoader, setOpenLoader] = useState(false);
    const [alert, setMessage] = useState({ message: "", severity: "" });
    const [openAlert, setOpenAlert] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    let { id } = useParams();
    let formData = new FormData()

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    })

    const handleChange = (name, value) => {
        setLectureData({ ...lectureData, [name]: value })
    }
    const fileInputHandler = (event) => {
        setSelectedFile(event.target.files[0]);

    }
    const Validator = () => {
        let formErrors = {
            description: lectureData.description.trim().length < 1 ? 'Description should not be empty' : "",
            title: lectureData.title.trim().length < 1 ? 'Title should not be empty' : "",
            url: lectureData.url.trim().length < 1 ? 'URL should not be empty' : "",
        }
        setErrors(formErrors)
        return Object.values(formErrors).every(x => x === '')
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };

    const submitdata = async () => {
        try {
            if (Validator()) {
                setOpenLoader(true);
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/video`, lectureData)
                formData.append('file', selectedFile)
                formData.append('id', response?.data.id)
                await axios.post(`${process.env.REACT_APP_API_URL}/video/file-upload`, formData)
                setOpenLoader(false);
                const message = alert;
                message.message = "Done";
                message.severity = "success"
                setMessage(message);
                setOpenAlert(true)
            }
        }
        catch (error) {
            const message = alert;
            message.message = error?.response?.data?.status?.message;
            message.severity = "error"
            setOpenLoader(false);
            setMessage(message);
            setOpenAlert(true)
        }
    }
    const updatedata = async () => {
        try {
            if (Validator()) {
                setOpenLoader(true);
                await axios.put(`${process.env.REACT_APP_API_URL}/video/${id}`, lectureData)
                setOpenLoader(false);
                const message = alert;
                message.message = "Done";
                message.severity = "success"
                setMessage(message);
                setOpenAlert(true)
            }
        }
        catch (error) {
            const message = alert;
            message.message = error?.response?.data?.status?.message;
            message.severity = "error"
            setOpenLoader(false);
            setMessage(message);
            setOpenAlert(true)
        }
    }
    const fetchData = async () => {
        setOpenLoader(true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/video/${id}`)
        setLectureData({
            description: response.data.data.description,
            title: response.data.data.title,
            url: response.data.data.url,
        })
        setOpenLoader(false);
    }
    useEffect(() => {
        if (id) {
            fetchData()
        }
        return () => {
            setLectureData({
                description: '',
                title: '',
                url: '',
            })
        }
    }, [id]);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='box'>
            <h1 >
                {id ? 'Edit Lecture' : 'Add Lecture'}
            </h1>
            <div className='inpt'>
                <TextInput label='Description' name='description' {...(errors?.description && { error: true, helperText: errors.description })}
                    onChange={handleChange} required fullWidth value={lectureData.description} />
            </div>
            <div className='inpt'>
                <TextInput label='Title' name='title' {...(errors?.title && { error: true, helperText: errors.title })}
                    onChange={handleChange} required fullWidth value={lectureData.title} />
            </div>
            <div className='inpt'>
                <TextInput label='URL' name='url' {...(errors?.url && { error: true, helperText: errors.url })}
                    onChange={handleChange} required fullWidth value={lectureData.url} />
            </div>
            <div className='fileInpt'>
                <Button variant="contained" component="label" className='apbtn'>
                    Upload File
                    <input type="file" hidden onChange={fileInputHandler} />
                </Button>
                {selectedFile && <p>{selectedFile.name}</p>}
            </div>
            {!id ?
                <Button type="reset" className='apbtn' variant="contained" onClick={submitdata}>
                    Submit
                </Button> : <Button type="reset" className='apbtn' variant="contained" onClick={updatedata}>
                    Update
                </Button>
            }
            <Snackbar open={openAlert} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alert.severity}>
                    {alert.message}
                </Alert>
            </Snackbar>
            <SimpleBackdrop open={openLoader} />
        </div>
    );
}