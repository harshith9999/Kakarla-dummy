import * as React from 'react';
import ResponsiveAppBar from '../components/Appbar';
import specialities from '../images/specialities.jpg';
import Footer from '../components/footer/Footer';
import './static.css'

const LaserDentistry = ({user}) => {
    return (<div>
        <ResponsiveAppBar user={user}/>
        <img src={specialities} alt='specialities' height='400px' width='100%' />
        <div className='veneersbody'>
            <p className='staticheading'>Laser Dentistry</p>
            <p>
                If you want fast results with a minimum of pain, swelling, and post-operative problems, this new branch of dentistry may be for you. Laser dentistry offers a long-lasting and highly effective alternative to painful and noisy drilling procedures. Lasers can now be used to perform a variety of functions, including bleaching, cavity removal, restoration, and periodontal surgery. These lasers work with other agents to achieve results. Lasers can also remove plaque and dental decay from a cavity-affected tooth, preparing it for a filling. A laser beam can also help harden bonding material. Finally, it can help in periodontal (gum-related) problems. Lasers can be used to reshape gums, remove excess or affected gum tissue in gum disease sufferers, and remove bacteria from pockets created between diseased gums and teeth.
            </p>
            <p className='staticsubheading'>Laser Whitening</p>
            <p>
                Your dentist will apply a translucent gel containing a bleaching agent, usually hydrogen peroxide, to your teeth. Then, he or she will flash a laser light onto your teeth. When the laser shines on the gel, the hydrogen peroxide breaks down into water and a free oxygen radical. The oxygen radical sticks to stain molecules. Eventually, energy from the argon laser causes the radical, and the stain, to shrink, making your teeth appear whiter. Note that the laser will not actually penetrate your teeth; it will simply catalyze the bleaching actions of the gel.
            </p>
            <p className='staticsubheading'>Cavity Removal</p>
            <p>
                Laser energy dissolves the bacteria found within the cavity, minimizing the amount of time a dentist must spend picking and drilling away at your tooth.
            </p>
            <p className='staticsubheading'>Restoration</p>
            <p>
                Lasers can be used to speed up the curing, or hardening, process of restorative materials, such as ceramic or resin.
            </p>
            <p className='staticsubheading'>Periodontal Surgery</p>
            <p>
                An excess of tartar can cause gums to swell, bleed and weaken to the point that they begin to "pull away" from the teeth. Eventually, pockets form between the teeth and gums and fill with bacteria. This condition is called periodontal disease, or gum disease. To cure it, a dentist specializing in gums, called a periodontist, uses small hand-held instruments to scale away tartar from the root surface of the tooth. Then, he or she directs a small amount of laser light energy through a tiny fiber placed between the gum and tooth. This light energy helps remove the disease-causing bacteria.
            </p>
            <p className='staticsubheading'>Laser Gum Surgery</p>
            <p>
                Sometimes, excessive gum tissue can cover the teeth, making them look "short." A periodontist uses a laser to remove this excess tissue and expose more of your tooth.
                <br />
                <br />
                Lasers are safe as long as proper eye protection is worn. You, your dentist and anyone else in the room at the time will wear safety glasses containing special lenses. Dental procedures using lasers are painless—and quiet. An air suction is used to keep the treated area cool and clean. This suction is the only sound you should hear; with laser dentistry, there are no drills. Other advantages of using a laser during dental procedures include:
                <br />
                <br />
                Reduced need for local anesthesia
                <br />
                <br />
                Minimal bleeding or swelling
                <br />
                <br />
                Little to no post-procedural discomfort
                <br />
                <br />
                Speedier procedures
            </p>
        </div>
        <Footer />
    </div>
    );
};
export default LaserDentistry;
