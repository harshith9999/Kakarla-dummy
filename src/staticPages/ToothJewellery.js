import * as React from 'react';
import ResponsiveAppBar from '../components/Appbar';
import specialities from '../images/specialities.jpg';
import Footer from '../components/footer/Footer';
import './static.css'

const ToothJewellery = ({user}) => {
    return (<div>
        <ResponsiveAppBar user={user}/>
        <img src={specialities} alt='specialities' height='400px' width='100%' />
        <div className='veneersbody'>
            <p className='staticheading'>Tooth Jewellery / Dental Jewel</p>
            <p className='staticsubheading'>Tooth Jewellery Skyce - (The million-dollar smile)</p>
            <p>
                Everybody needs a little extra sparkle in his or her life from time to time. Teeth jewellery, non-invasive tooth decoration, is a brilliant way to add sparkles to your smile and stand out of the crowd. Skyce'TM is one of many such products that present the perfect way to get exactly that.
                <br />
                Tooth jewellery is much in demand these days in cosmetic dentistry. Most are making this style statement not only to surprise friends with a sparkling crystal glass design, or something in gold with a twinkle of ruby or diamond, but also add zing in life. These tiny little designs are great fun, and because there's no drilling involved, they won't harm your teeth.
                <br />
                Tooth jewellery is much in demand these days in cosmetic dentistry. Most are making this style statement not only to surprise friends with a sparkling crystal glass design, or something in gold with a twinkle of ruby or diamond, but also add zing in life. These tiny little designs are great fun, and because there's no drilling involved, they won't harm your teeth.
            </p>
            <p className='staticsubheading'>Choices and Facts:</p>
            <p> Doesn't cost a fortune
                <br />
                Lots of fun designs to choose from
                <br />
                Teeth jewellery is available in two colours: "crystal" and "sapphire blue"
                <br />
                'Twinkles' designs in 24k gold - with or without ruby and diamond
                <br />
                No drilling, so the jewel does not damage tooth tissues and has no side effects
                <br />
                Mostly jewels are applied to the labial surfaces of upper anterior teeth
                <br />
                It can be easily removed without any damage to the tooth structure. Further, tooth jewellery can be fixed again at a later stage.
            </p>
        </div>
        <Footer />
    </div>
    );
};
export default ToothJewellery;
