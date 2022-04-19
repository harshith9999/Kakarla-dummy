import * as React from 'react';
import ResponsiveAppBar from '../components/Appbar';
import specialities from '../images/specialities.jpg';
import Footer from '../components/footer/Footer';
import './static.css'

const CeramicCrowns = ({user}) => {
    return (<div>
        <ResponsiveAppBar user={user}/>
        <img src={specialities} alt='specialities' height='400px' width='100%' />
        <div className='veneersbody'>
            <p className='staticheading'>Ceramic Crowns and Fixed Bridges</p>
            <p className='staticsubheading'>Ceramic crown or bridge bonded to a metal framework</p>
            <p>
                We exclusively use a nickel-free or precious metal (titanium, palladium or gold) alloy as the material of the metal framework that provides a frame for and gives stability to the bridge or crown.
            </p>
            <p className='staticsubheading'>Procedure:</p>
            <p>
                The dentist first prepares the tooth, takes an impression of it, and then the dental technician creates the crown or the bridge. Several layers of ceramic veneer are applied to the thin metal framework (which was either cast, created with computer-aided manufacturing or formed using electrophoresis previously), and then bonded to the framework at a high temperature. Thus, taking individual characteristics (e.g., tooth color) into account, a natural esthetic effect can be achieved, which is similar to the patient's own teeth. Additionally, the original masticatory function, the possibility of proper phonation and the harmony of the face can be restored with prostheses.
            </p>
            <p className='staticsubheading'>Metal-free crowns and bridges</p>
            <p>
                These are primarily made of zirconium dioxide (zirconia) or compressed ceramic. Zirconia ceramic as a base material for crowns and bridges has been developed in the previous few years. It has numerous advantages when compared with metal-ceramic prostheses:
                <br />
                <br />
                It is metal-free, and does not cause allergy.
                <br />
                <br />
                Besides its mechanical properties being in many aspects better than those of metals, a prosthesis made of it is entirely esthetic and tooth-colored.
                <br />
                <br />
                It is biologically neutral (bio-inert) and environmentally friendly. It conducts heat and electricity poorly; therefore, dental plaques cannot build up on its surface.
                <br />
                <br />
                It is permeable to light, and has excellent photodynamic properties.
                <br />
                <br />
                In case of crowns and bridges made of this material, there is no risk of gingivitis or premature gingival retraction.
                <br />
                <br />
                Its disadvantage is that it is more expensive than its counterparts, however, it is more modern, and represents an esthetically higher value. There is no risk of developing metal allergy, or a discoloration of the gingival margin near the edge of the metal parts. Besides prostheses, dental implants and abutment pieces (fitted into the implant to support the restoration) are also made of this material. It seems that its application has opened a new era in dentistry.
            </p>
        </div>
        <Footer />
    </div>
    );
};
export default CeramicCrowns;
