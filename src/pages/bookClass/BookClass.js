import React, { useEffect, useState } from 'react';
import TextInput from '../../components/TextInput';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useParams } from "react-router-dom";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ReCAPTCHA from "react-google-recaptcha";
import CircularProgress from '@mui/material/CircularProgress';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function BookClass({ role }) {
    let { id } = useParams();
    const [demoData, setDemoData] = useState({
        name: "",
        phone_number: "",
        demo_date: new Date().toISOString(),
        message: "",
    });
    const [open, setOpen] = useState(false);
    const [isverify, setisverify] = useState(true);
    const [alert, setMessage] = useState({ message: "", severity: "" });
    const [openLoader, setOpenLoader] = useState(false);
    const [errors, setErrors] = useState();
    let captcha

    const handleOnChange = () => {
        setisverify(false)
    }
    const handleOnExpired = () => {
        setisverify(true)
    }
    const handleDateChange = (date) => {
        setDemoData({ ...demoData, demo_date: date.toISOString() })
    };
    const validator = () => {
        let formErrors = {
            name: demoData.name.trim().length < 4 ? 'Name should have atleast 4 characters' : /^[a-zA-Z\s]*$/.test(demoData.name) ? "" : 'Name should contain only alphabets and space',
            phone_number: /^[6-9]\d{9}$/.test(demoData.phone_number) ? "" : 'Please enter a valid Mobile Number',
        }
        setErrors(formErrors)
        return Object.values(formErrors).every(x => x === '')
    }
    const handleChange = (name, value) => {
        if (value !== ' ') {
            setDemoData({ ...demoData, [name]: value })
        }
    }
    
    const fetchData = async () => {
        setOpenLoader(true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/democlass/${id}`)
        setDemoData({
            name: response.data.data.name,
            phone_number: response.data.data.phone_number,
            demo_date: response.data.data.demo_date,
            message: response.data.data.message,
        })
    }
    useEffect(() => {
        if (id) {
            fetchData()
        setOpenLoader(false);

        }
        return () => {
            setDemoData({
                name: '',
                phone_number: '',
                demo_date: new Date().toISOString(),
                message: '',
            })
        }
    }, [id]);// eslint-disable-line react-hooks/exhaustive-deps

    const updatedata = async () => {
        try {
            if (validator()) {
                setOpenLoader(true);
                await axios.patch(`${process.env.REACT_APP_API_URL}/democlass/${id}`, demoData)
                setOpenLoader(false);
                const message = alert;
                message.message = "Updated Successfully";
                message.severity = "success"
                setMessage(message);
                setOpen(true);
            }
        }
        catch (error) {
            const message = alert;
            message.message = error?.response?.data?.status?.message;
            message.severity = "error"
            setMessage(message);
            setOpen(true);
            setOpenLoader(false);

        }
    }
    const submitdata = async () => {
        try {
            if (validator()) {
                setOpenLoader(true);
                setisverify(true)
                await axios.post(`${process.env.REACT_APP_API_URL}/democlass`, demoData)
                setOpenLoader(false);
                const message = alert;
                message.message = "Done";
                message.severity = "success"
                setMessage(message);
                setOpen(true);
                setDemoData({ name: "", phone_number: "", appointment_date: new Date().toISOString(), message: "" });
                captcha.reset()
            }
        }
        catch (error) {
            const message = alert;
            message.message = error?.response?.data?.status?.message;
            message.severity = "error"
            setOpenLoader(false);
            setMessage(message);
            setOpen(true);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (openLoader ? <div className='loader'><CircularProgress color="inherit" /></div>
        : <div className='box'>
            <h1 >
                {id ? 'Edit Free demo class by iitian ' : 'Book Free demo class by iitian'}
            </h1>
            <div className='bookinpt'>
                <TextInput label='Student Name' name='name' {...(errors?.name && { error: true, helperText: errors.name })}
                    inputProps={{ minLength: '4' }}
                    onChange={handleChange} required fullWidth value={demoData.name} />
            </div>
            <div className='bookinpt'>
                <TextInput label='Mobile Number' name='phone_number' value={demoData.phone_number} type='number'
                    onChange={handleChange} required fullWidth {...(errors?.phone_number && { error: true, helperText: errors.phone_number })} />
            </div>
            <div className='bookinpt'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="Select Demo Class Date"
                        value={demoData.demo_date}
                        minDate={new Date('2020-01-01')}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextInput {...params} fullWidth />}
                    />
                </LocalizationProvider >
            </div>
            <div className='bookinpt'>
                <TextInput label='Message' name='message' value={demoData.message}
                    onChange={handleChange} fullWidth {...(errors?.message && { error: true, helperText: errors.message })} />
            </div>
            {!id && <ReCAPTCHA ref={(e) => captcha = e} 
                sitekey="6LdKGcofAAAAAK0ovT3sW9wMiAWECrJmYPgqPme9"
                onChange={handleOnChange}
                onExpired={handleOnExpired}
            />}
            {!id ?
                <Button disabled={isverify} type="reset" className='apbtn' variant="contained" onClick={submitdata}>
                    Book Demo Class
                </Button> : <Button type="reset" className='apbtn' variant="contained" onClick={updatedata}>
                    Update Demo Class
                </Button>
            }

            <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alert.severity}>
                    {alert.message}
                </Alert>
            </Snackbar>


        </div>
    );
}