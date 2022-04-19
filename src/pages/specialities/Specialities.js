import * as React from 'react';
import MaterialCard from '../../components/Card';
import ResponsiveAppBar from '../../components/Appbar';
import specialities from '../../images/specialities.jpg';
import Footer from '../../components/footer/Footer';
import './specialities.css';
import { useNavigate } from 'react-router-dom';

const Specialities = ({ user }) => {
  const navigate=useNavigate()
  return (<div>
    <ResponsiveAppBar user={user}/>
    <img src={specialities} alt='specialities' height='400px' width='100%'/>
    <div>
      <p className='specialitiesHeading'>Specialities</p>
      <p className='specialitiesBody'>Kakarla Multi Speciality Dental Hospital Provides Various Dental Treatments For EHS , ESI, APSRTC, Arogya Sahayatha,TTD Employees.</p>
    </div>
    <div className='cardsdiv'>
      <div className='cards'>
        <MaterialCard text='Veneers / Laminates' onClick={()=>navigate('/veneers')}/>
      </div>
      <div className='cards'>
        <MaterialCard text='Tooth Jewellery' onClick={()=>navigate('/tooth-jewellery')} />
      </div>
      <div className='cards'>
        <MaterialCard text='Smile Makeover' />
      </div>
    </div>
    <div className='cardsdiv'>
      <div className='cards'>
        <MaterialCard text='Implant Dentistry' onClick={()=>navigate('/implant-dentistry')} />
      </div>
      <div className='cards'>
        <MaterialCard text='Laser Dentistry' onClick={()=>navigate('/laser-dentistry')} />
      </div>
      <div className='cards'>
        <MaterialCard text='Orthodontics (Braces)' onClick={()=>navigate('/orthodontics')} />
      </div>
    </div>
    <div className='cardsdiv'>
      <div className='cards'>
        <MaterialCard text='Cosmetic Reshaping of Teeth' onClick={()=>navigate('/cosmetic-reshaping')} />
      </div>
      <div className='cards'>
        <MaterialCard text='Ceramic Crowns and Fixed Bridges' onClick={()=>navigate('/ceramic-crowns')} />
      </div>
      <div className='cards'>
        <MaterialCard text='Partial and Complete Dentures' onClick={()=>navigate('/partial-and-complete')} />
      </div>
    </div>
    <div className='cardsdiv'>
      <div className='cards'>
        <MaterialCard text='Tooth Filling' onClick={()=>navigate('/tooth-filling')} />
      </div>
      <div className='cards'>
        <MaterialCard text='Esthetic Dentistry' onClick={()=>navigate('/esthetic-dentistry')} />
      </div>
      <div className='cards'>
        <MaterialCard text='Cosmetic Dentistry' onClick={()=>navigate('/cosmetic-dentistry')} />
      </div>
    </div>
    <Footer/>
  </div>
  );
};
export default Specialities;
