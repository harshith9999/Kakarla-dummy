import * as React from 'react';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import g1 from '../../images/g1.jpg';
import g2 from '../../images/g2.jpg';
import g3 from '../../images/g3.jpg';
import g4 from '../../images/g4.jpg';
import g5 from '../../images/g5.jpg';
import g6 from '../../images/g6.jpg';
import g7 from '../../images/g7.jpg';
import g8 from '../../images/g8.jpg';
import g9 from '../../images/g9.jpg';
import './footer.css';

const Footer = () => {

    return (
        <div className="footer">
            <div className='col1'>
                <Link className='title' href='/' underline="none"> KAKARLA </Link>
                <p>EHS, ESI, ArogyaSree, APSRTC Schemes Available.</p>
                <FacebookIcon className="icons" />
                <TwitterIcon className="icons" />
                <InstagramIcon className="icons" />
                <PinterestIcon className="icons" />
            </div>
            <div className="col2">
                <p className='title2'>Useful Links</p>
                <div className='linksContainer'>
                    <Link href='/' className="links" underline="none"> Home </Link>
                    <Link href='/' className="links" underline="none"> About </Link>
                    <Link href='/' className="links" underline="none"> Services </Link>
                    <Link href='/' className="links" underline="none"> Gallery </Link>
                    <Link href='/' className="links" underline="none"> Contact </Link>
                </div>
            </div>
            <div className="col3">
                <p className='title2'>Gallery</p>
                <div className='imgdiv'>
                <img src={g1} alt=" " className="img" />
                <img src={g2} alt=" " className="img" />
                <img src={g3} alt=" " className="img" />
                </div>
                <img src={g4} alt=" " className="img" />
                <img src={g5} alt=" " className="img" />
                <img src={g6} alt=" " className="img" />
                <div>
                <img src={g7} alt=" " className="img" />
                <img src={g8} alt=" " className="img" />
                <img src={g9} alt=" " className="img" />
                </div>
            </div>
            <div className='col3'>
                <p className='title2'>Contact Information</p>
                <div className="contact">
                    <div className="contactDetails">
                        <PhoneEnabledIcon />
                        <p className='contactDetails2'>Phone Number</p>
                    </div>
                    <Link href="tel:+917396031313" underline="none" sx={{display:'flex',my:2}} color="inherit">+91 73 96 03 13 13</Link>
                </div>
                <div className="contact">
                    <div className="contactDetails">
                        <MailIcon />
                        <p className='contactDetails2'>Email Address</p>
                    </div>
                    <p>Email :
                        <Link className='mail' underline="none" href="mailto:kakarladental@gmail.com">kakarladental@gmail.com</Link>
                    </p>
                </div>
                <div className="contact">
                    <div className="contactDetails">
                        <LocationOnIcon />
                        <p className='contactDetails2'>Location</p>
                    </div>
                    <p>Beside PLR Convention Centre, Air By Pass Road, Tirupati - 517501, Andhra Pradesh.</p>
                </div>
            </div>
        </div>)
}
export default Footer;
