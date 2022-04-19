import React, {useState} from 'react';
import TextInput from '../TextInput';
import './contact.css';
import axios from 'axios';
import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactForm = () => {
    const [contactData, setContactData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState();
    const [open, setOpen] = useState(false);
    const [alert, setMessage] = useState({ message: "", severity: "" });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleChange = (name, value) => {
        if (value !== ' ') {
            setContactData({ ...contactData, [name]: value })
        }
    }
    const validator = () => {
        let formErrors = {
            name: contactData.name.trim().length < 4 ? 'Name should have atleast 4 characters' :  /^[a-zA-Z\s]*$/.test(contactData.name) ? "" : 'Name should contain only alphabets and space',
            email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactData.email) ? "" : 'Please enter a valid Email',//eslint-disable-line
        }
        setErrors(formErrors)
        return Object.values(formErrors).every(x => x === '')
    }

    const submitData=async()=>{
        try{
        if (validator()) {
            await axios.post(`${process.env.REACT_APP_API_URL}/contact`, contactData)
            setContactData({ name: "", email: "", message: ""});
            const message = alert;
            message.message = "Done";
            message.severity = "success"
            setMessage(message);
            setOpen(true);
        }
    }
    catch(error){
        const message = alert;
            message.message = "Sorry Submission Failed";
            message.severity = "error"
            setMessage(message);
            setOpen(true);
    }
    }
    return (
        <div className='contactform'>
            <h1>Contact Us</h1>
            <div className='input'>
                <TextInput label='Name' name='name' {...(errors?.name && { error: true, helperText: errors.name })}
                    inputProps={{ minLength: '4' }} value={contactData.name}
                    required fullWidth onChange={handleChange} />
            </div>
            <div className='input'>
                <TextInput label='Email' name='email' {...(errors?.email && { error: true, helperText: errors.email })}
                    required fullWidth onChange={handleChange} value={contactData.email}/>
            </div>
            <div className='input'>
                <TextInput label='Message' name='message'
                    fullWidth onChange={handleChange} value={contactData.message} />
            </div>
            <Button type="reset" className='sbmtbtn' variant="contained" onClick={submitData} >
                Submit
            </Button>
            <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alert.severity}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </div>
    )
}
export default ContactForm;