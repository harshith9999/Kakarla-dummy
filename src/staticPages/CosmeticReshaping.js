import * as React from 'react';
import ResponsiveAppBar from '../components/Appbar';
import specialities from '../images/specialities.jpg';
import Footer from '../components/footer/Footer';
import './static.css'

const CosmeticReshaping = ({user}) => {
    return (<div>
        <ResponsiveAppBar user={user}/>
        <img src={specialities} alt='specialities' height='400px' width='100%' />
        <div className='veneersbody'>
            <p className='staticheading'>Cosmetic Reshaping of Teeth</p>
            <p className='staticsubheading'>What Is Tooth Reshaping?</p>
            <p>
                Tooth reshaping, also called dental contouring, is a cosmetic dentistry technique that removes small amounts of tooth enamel (the outer covering of the tooth) in order to change the shape, length, or surface of one or more teeth.
            </p>
            <p className='staticsubheading'>What's Involved in Tooth Reshaping and Dental Contouring?</p>
            <p>
                Tooth reshaping is performed using dental instruments and abrasion techniques. Dental X-rays may be taken before the reshaping and contouring begin to ensure that your teeth are healthy. Your dentist will then mark your teeth with a pen to highlight areas that need sculpting. A sanding instrument is used to artfully eliminate or minimize imperfections on the surface of the teeth, and sandpaper-like strips may be used to contour the sides of the teeth. Finally, the teeth are smoothed and polished.
            </p>
            <p className='staticsubheading'>Pros and Cons of Tooth Reshaping and Contouring</p>
            <p>
                Although reshaping and contouring are conservative approaches to changing the appearance of your teeth, it’s still important to weigh the pros and cons of these procedures to see if they're right for you.
            </p>
        </div>
        <Footer />
    </div>
    );
};
export default CosmeticReshaping;
