import React, { useEffect, useState } from 'react';
import TextInput from '../../components/TextInput';
import { useNavigate } from 'react-router-dom';
import { auth, createUserDocument, db } from '../../firebase';
import { RecaptchaVerifier, signInWithPhoneNumber, setPersistence } from "firebase/auth";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SimpleBackdrop from '../../components/SimpleBackdrop'
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';
import Appbar from '../../components/Appbar';
import doctor from '../../images/doctor.svg';
import patient from '../../images/patient.png';
import './login.css';


export default function Login({ user, isLoginChecked }) {
    let navigate = useNavigate();
    const [state, setState] = useState({ phoneNumber: '' });
    const [role, setRole] = useState('patient');
    const [alert, setMessage] = useState({ message: "", severity: "" });
    const [openAlert, setOpenAlert] = useState(false);
    const [openLoader, setOpenLoader] = useState(true);
    const [next, setNext] = useState(true);
    const [recaptcha, setRecaptcha] = useState(true);
    const [otp, setOtp] = useState({ otp1: "", otp2: "", otp3: "", otp4: "", otp5: "" })
    const changeHandler = (name, value) => {
        setState({ ...state, [name]: value })
    }
    const handleChange = (value1, event) => {
        if (event.target.value.length <= 1) {
            setOtp({ ...otp, [value1]: event.target.value });
        }
    }

    const inputfocus = (elmnt, key) => {
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
            const next = key * 2 - 4;
            if (next >= 0) elmnt.target.form.elements[next].focus()
        }
        else {
            const next = key * 2;
            if (next < 11) elmnt.target.form.elements[next].focus()
            else document.getElementById('btn').focus()
        }
    }

    const roleHandler = () => {
        if (role === 'patient') {
            if (!next) {
                setNext(true)
                setRecaptcha(false)

            }
            setRole('admin')
            navigate('/admin-login')
        }
        else {
            if (!next) {
                setNext(true)
                setRecaptcha(false)
            }
            setRole('patient')
            navigate('/login')
        }
    };

    useEffect(() => {
        if (!isLoginChecked) {
            onAuthStateChanged(auth, (data) => {
                if (data) {
                    setOpenLoader(false)
                    navigate('/appointment')
                }
                else {
                    setOpenLoader(false)
                }
            })
        }
        else {
            if (user) {
                navigate('/appointment')
            }
            setOpenLoader(false)
        }
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const verifyHandler = async () => {
        try {
            const code = otp.otp1 + otp.otp2 + otp.otp3 + otp.otp4 + otp.otp5 + otp.otp6
            let confirmationResult = window.confirmationResult
            const phoneNumber = '+91' + state.phoneNumber
            const userRef = await getDoc(doc(db, `users/${phoneNumber}`))
            const docData = userRef.data()
            if (!docData && role === 'patient') {
                const result = await confirmationResult.confirm(code)
                const user = result.user;
                await createUserDocument(user, role)
                navigate('/appointment')
            }
            else if (docData && docData.role !== role) {
                const message = alert;
                message.message = `User should login as ${docData.role}`
                message.severity = 'error'
                setMessage(message);
                setOpenAlert(true);
            }
            else if (docData && docData.role === role) {
                await confirmationResult.confirm(code)
                navigate('/appointment')
            }
            else {
                const message = alert;
                message.message = `No such User exists`
                message.severity = 'error'
                setMessage(message);
                setOpenAlert(true);
            }
        }
        catch (e) {
            const message = alert;
            message.message = 'Wrong OTP'
            message.severity = 'error'
            setMessage(message);
            setOpenAlert(true);
        }
    }
    const resendHandler = async () => {
        const phoneNumber = '+91' + state.phoneNumber
        const appVerifier = window.recaptchaVerifier;
        await setPersistence(auth, 'local')
        const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        window.confirmationResult = confirmationResult;

    }
    const enterHandler = () => {
        setNext(true)
        setRecaptcha(false)
    }
    const otpHandler = async () => {
        if (state.phoneNumber) {
            try {
                if (recaptcha) {
                    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                        'size': 'invisible',
                    }, auth);
                }
                if (state.phoneNumber.length !== 10) {
                    const message = alert;
                    message.message = 'Please enter a valid Mobile number '
                    message.severity = 'error'
                    setMessage(message);
                    setOpenAlert(true);
                    return
                }
                setNext(false)
                const phoneNumber = '+91' + state.phoneNumber
                const appVerifier = window.recaptchaVerifier;
                const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
                window.confirmationResult = confirmationResult;

            }
            catch (e) {
                const message = alert;
                message.message = e.message
                message.severity = 'error'
                setMessage(message);
                setOpenAlert(true);
            }
        }
        else {
            const message = alert;
            message.message = 'Please Enter a valid Mobile number'
            message.severity = 'error'
            setMessage(message);
            setOpenAlert(true);

        }
    }
    return (<div className='page' >
        <Appbar />
        <div className='formContainer'>
            <div className='form'>
                {role === 'patient' ?
                    <>
                        <img src={patient} className='icon1' alt='doctor' />
                        <h2 className='h2'>Patient Login</h2>
                    </> :
                    <>
                        <img src={doctor} className='icon2' alt='doctor' />
                        <h2 className='h2'>Admin Login</h2>
                    </>}
                {next ? <div>
                    <div className='container'>
                        <TextInput label='Mobile Number' name='phoneNumber' type='number' value={state.phoneNumber}
                            onChange={changeHandler} InputProps={{
                                startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                            }} />
                    </div>
                    <div className='btnContainer'>
                        <Button variant="contained" className='otp' onClick={otpHandler}>Continue</Button>
                    </div>
                </div> : <div>
                    <div className='container2'>
                        <Box component='form'>
                            <TextField className='textwidth inputwidth' type='number' required id="outlined-basic" autoFocus
                                onChange={e => handleChange("otp1", e)} tabIndex="1" value={otp.otp1}
                                maxLength={1} onKeyUp={e => inputfocus(e, 1)} />

                            <TextField className='textwidth inputwidth' type='number' required id="outlined-basic" value={otp.otp2}
                                onChange={e => handleChange("otp2", e)} tabIndex="2" maxLength="1" onKeyUp={e => inputfocus(e, 2)} />

                            <TextField className='textwidth inputwidth' type='number' required id="outlined-basic" value={otp.otp3}
                                onChange={e => handleChange("otp3", e)} tabIndex="3" maxLength="1" onKeyUp={e => inputfocus(e, 3)} />

                            <TextField className='textwidth inputwidth' type='number' required id="outlined-basic" value={otp.otp4}
                                onChange={e => handleChange("otp4", e)} tabIndex="4" maxLength="1" onKeyUp={e => inputfocus(e, 4)} />

                            <TextField className='textwidth inputwidth' type='number' required id="outlined-basic" value={otp.otp5}
                                onChange={e => handleChange("otp5", e)} tabIndex="5" maxLength="1" onKeyUp={e => inputfocus(e, 5)} />

                            <TextField className='textwidth inputwidth' type='number' required id="outlined-basic" value={otp.otp6}
                                onChange={e => handleChange("otp6", e)} tabIndex="6" maxLength="1" onKeyUp={e => inputfocus(e, 6)}
                                onK />
                        </Box>
                    </div>
                    <div className='btnContainer2'>
                        <Button id='btn' variant="contained" className='verify' onClick={verifyHandler}>Verify</Button>
                    </div>
                </div>
                }{next === false &&
                    <div>
                        <div className='resendContainer'>
                            <p className='p'>Wrong Phone number? Click on</p>
                            <Button variant="text" className='resend' onClick={enterHandler}>enter again</Button>
                        </div>
                        <div className='resendContainer'>
                            <p className='p'>Didn't get an OTP? Click on </p>
                            <Button variant="text" className='resend' onClick={resendHandler}>resend OTP</Button>
                        </div>
                    </div>

                }
                <div className='btnContainer3'>
                    {role === 'patient' ?
                        <Button variant="text" className='login' onClick={roleHandler}>Login as Admin</Button> :
                        <Button variant="text" className='login' onClick={roleHandler}>Login as Patient</Button>}
                </div>
                <Snackbar open={openAlert} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={alert.severity}>
                        {alert.message}
                    </Alert>
                </Snackbar>
                <div id='recaptcha-container'></div>
                <SimpleBackdrop open={openLoader} />
            </div>
        </div>
    </div>
    );
}
