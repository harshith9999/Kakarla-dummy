import * as React from 'react';
import Appointment from '../../pages/appointment/Appointment';
import './banner.css';


const Banner = () => {

    return (
            <div className='home'>
                <div className='col'>
                        <p className='large'>
                            Keep Family in  the loop and get support
                        </p>
                        <p className='small'>
                            Record and transcribe doctor visits to share securely 
                            with loved ones during complex care scenarious such 
                            as Cancer,Covid-19 and more.
                        </p>
                        <p className='medium'>
                            Download Now for Free
                        </p>
                    <div className='stores'>
                        <a href='/' >
                            <img className='applinks' alt='app store' src='https://assets.website-files.com/5ce2ef9ce57aeb64f4784513/5cf7676363b1af777a7a8db1_app-store.svg' />
                            </a>
                        <a href='/' className='playstore' >
                            <img className='applinks' alt='play store' src='https://assets.website-files.com/5ce2ef9ce57aeb64f4784513/5cf766149ec8415f21913188_google-play.svg' />
                        </a>
                    </div>
                </div>
                <div className='apptContainer'>
                    <div className='appt'>
                        <Appointment />
                    </div>
                </div>
            </div>
    )
}
export default Banner;