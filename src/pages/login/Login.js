import React, { useState, useEffect } from 'react';
import TextInput from '../../components/TextInput';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import axios from 'axios';
import Box from '@mui/material/Box';
import SimpleBackdrop from '../../components/SimpleBackdrop'
import Appbar from '../../components/Appbar';
import './login.css';


export default function Login() {
    let navigate = useNavigate();
    const [signupData, setSignupData] = useState({ first_name: '', last_name: '', mobile_number: '', email: '', password: '' });
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [role, setRole] = useState('user');
    const [alert, setMessage] = useState({ message: "", severity: "" });
    const [openAlert, setOpenAlert] = useState(false);
    const [openLoader, setOpenLoader] = useState(false);
    const [next, setNext] = useState(true);
    const [signupErrors, setSignupErrors] = useState();
    const [loginErrors, setLoginErrors] = useState();
    const user = JSON.parse(localStorage.getItem('login'));

    useEffect(() => {
        if (user?.token) {
            navigate('/lecture')
        }
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (name, value) => {
        setSignupData({ ...signupData, [name]: value })
    }
    const handleLoginChange = (name, value) => {
        setLoginData({ ...loginData, [name]: value })
    }
    const nextHandler = () => {
        setNext(!next)
    }

    const signupValidator = () => {
        let formErrors = {
            first_name: signupData.first_name.trim().length < 4 ? 'First name should have atleast 4 characters' : /^[a-zA-Z\s]*$/.test(signupData.first_name) ? "" : 'First name should contain only alphabets and space',
            last_name: signupData.last_name.trim().length < 1 ? 'Last name should not be empty' : /^[a-zA-Z\s]*$/.test(signupData.last_name) ? "" : 'Last name should contain only alphabets and space',
            email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signupData.email) ? "" : 'Please enter a valid Email',//eslint-disable-line
            mobile_number: /^[6-9]\d{9}$/.test(signupData.mobile_number) ? "" : 'Please enter a valid Mobile Number',//eslint-disable-line
            password: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(signupData.password) ? "" : 'Invalid password, password must contain 8 characters and include one lowercase, one uppercase, one number'
        }
        setSignupErrors(formErrors)
        return Object.values(formErrors).every(x => x === '')
    }
    const loginValidator = () => {
        let formErrors = {
            email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginData.email) ? "" : 'Please enter a valid Email',//eslint-disable-line
            password: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(loginData.password) ? "" : 'Invalid password, password must contain 8 characters and include one lowercase, one uppercase, one number'
        }
        setLoginErrors(formErrors)
        return Object.values(formErrors).every(x => x === '')
    }
    const roleHandler = () => {
        if (role === 'user') {
            setRole('admin')
            navigate('/admin-login')
        }
        else {
            setRole('user')
            navigate('/login')
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const submitdata = async () => {
        try {
            if (signupValidator()) {
                setOpenLoader(true);
                await axios.post(`${process.env.REACT_APP_API_URL}/signup`, signupData)
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
    const loginHandler = async () => {
        try {
            if (loginValidator()) {
                setOpenLoader(true);
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, { ...loginData, role })
                setOpenLoader(false);
                const message = alert;
                message.message = "Done";
                message.severity = "success"
                setMessage(message);
                setOpenAlert(true)
                let loginUser = { 'token': response.data.token, 'role': role };
                localStorage.setItem('login', JSON.stringify(loginUser));
                navigate('/lecture');
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

    return (<div className='page' >
        <Appbar />
        <div className='formContainer'>
            <div className='form'>
                {role === 'user' ?
                    <h2 className='h2'>User Login</h2>
                    :
                    <h2 className='h2'>Admin Login</h2>
                }
                {next ? <div>
                    <div className='container'>
                        <div className='inpt'>
                            <TextInput label='First Name' name='first_name' {...(signupErrors?.first_name && { error: true, helperText: signupErrors.first_name })}
                                inputProps={{ minLength: '4' }} size='small'
                                onChange={handleChange} required fullWidth value={signupData.first_name} />
                        </div>
                        <div className='inpt'>
                            <TextInput label='Last Name' name='last_name' {...(signupErrors?.last_name && { error: true, helperText: signupErrors.last_name })}
                                size='small' onChange={handleChange} required fullWidth value={signupData.last_name} />
                        </div>
                        <div className='inpt'>
                            <TextInput label='Email' name='email' {...(signupErrors?.email && { error: true, helperText: signupErrors.email })}
                                size='small' onChange={handleChange} required fullWidth value={signupData.email} />
                        </div>
                        <div className='inpt'>
                            <TextInput label='Mobile Number' name='mobile_number' value={signupData.mobile_number} type='number'
                                size='small' onChange={handleChange} required fullWidth {...(signupErrors?.mobile_number && { error: true, helperText: signupErrors.mobile_number })} />
                        </div>
                        <div className='inpt'>
                            <TextInput label='Password' name='password' {...(signupErrors?.password && { error: true, helperText: signupErrors.password })}
                                type="password" size='small' onChange={handleChange} required fullWidth value={signupData.password} />
                        </div>
                    </div>
                    <div className='btnContainer'>
                        <Button variant="contained" className='signup' onClick={submitdata}>Sign Up</Button>
                    </div>
                    <div className='resendContainer'>
                        <p className='p'>Already have an account?</p>
                        <Button variant="text" className='resend' onClick={nextHandler} > login</Button>
                    </div>
                </div> : <div>
                    <div className='container2'>
                        <Box component='form'>
                            <div className='inpt'>
                                <TextInput label='Email' name='email' {...(loginErrors?.email && { error: true, helperText: loginErrors.email })}
                                    size='small' onChange={handleLoginChange} required fullWidth value={loginData.email} />
                            </div>
                            <div className='inpt'>
                                <TextInput label='Password' name='password' {...(loginErrors?.password && { error: true, helperText: loginErrors.password })}
                                    type="password" size='small' onChange={handleLoginChange} required fullWidth value={loginData.password} />
                            </div>
                        </Box>
                    </div>
                    <div className='btnContainer'>
                        <Button variant="contained" className='signup' onClick={loginHandler}>Login</Button>
                    </div>
                </div>
                }{next === false &&
                    <div className='resendContainer'>
                        <p className='p'>Don't have an account?</p>
                        <Button variant="text" className='resend' onClick={nextHandler}> Sign up</Button>
                    </div>

                }
                <div className='btnContainer'>
                    {role === 'user' ?
                        <Button variant="text" className='login' onClick={roleHandler}>Login as Admin</Button> :
                        <Button variant="text" className='login' onClick={roleHandler}>Login as User</Button>}
                </div>
                <Snackbar open={openAlert} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={alert.severity}>
                        {alert.message}
                    </Alert>
                </Snackbar>
                <SimpleBackdrop open={openLoader} />
            </div>
        </div>
    </div>
    );
}
