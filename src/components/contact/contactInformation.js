import * as React from 'react';
import './contact.css';


const ContactForm = () => {

    return (
        <div className='contactinfo'>
            <p className='contactheading'>CALL US</p>
            <p >+91 73 96 03 13 13 </p>
            <p className='contactheading'>LOCATION</p>
            <p >Beside PLR Convention Centre,<br /> Air By Pass Road,<br />Tirupati - 517501, Andhra Pradesh.
            </p>
            <p className='contactheading'>OUR TOP SERVICES</p>
            <p className='contactservices'>Implant Dentistry
                <br />Laser Dentistry
                <br />Esthetic Dentistry
            </p>

        </div>
    )
}
export default ContactForm;