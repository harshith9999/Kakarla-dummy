import * as React from 'react';
import ResponsiveAppBar from '../components/Appbar';
import specialities from '../images/specialities.jpg';
import Footer from '../components/footer/Footer';
import './static.css'

const ImplantDentistry = ({user}) => {
    return (<div>
        <ResponsiveAppBar user={user}/>
        <img src={specialities} alt='specialities' height='400px' width='100%' />
        <div className='veneersbody'>
            <p className='staticheading'>Implant Dentistry</p>
            <p>

                A dental implant is an artificial tooth root surgically placed directly into the jawbone where a tooth is missing. A dental implant acts as an anchor for a bridge, replacement tooth, or a set of replacement teeth. Implants provide a good alternative to crowns and bridges due to the fact they are in no way attached to neighboring teeth and thus look and feel like natural teeth.
                <br />
                <br />
                Dental implants are generally made of titanium, a surgical metal that bonds well to bone. The cylindrical implant is designed to integrate into the structure of your jawbone, forming an anchor for your replacement tooth. Implanting the artificial root requires surgery, usually under a local anesthetic. During surgery, an incision is made in the gum to expose the jawbone, the bone is prepared, and the implant is inserted into the prepared site. Usually this area is left undisturbed for 4-6 months to ensure proper healing. Once the site has healed, a second procedure is required to clear the gum away from the implant and fasten a post, which will attach to the replacement tooth.
                <br />
                <br />
                Dental implants are suitable for patients of all ages who are missing one or more teeth. Patients who do not have enough bone to support the implant will have to consider options for correcting the bone deficiency. Adequate bone in the jaw is needed to support the implant, as well as healthy gum tissue that is free of periodontal disease. Those who suffer from jaw clenching or grinding should discuss their options with a dentist as the success rate for dental implants decreases significantly for people with chronic jaw problems.
                <br />
                <br />
                From start to finish, the dental implanting procedure can take up to nine months to complete. This lengthy process has a very high success rate, about 95% depending on the placement of the implant, and is an extremely reliable option for tooth replacement.
            </p>
            <p className='staticsubheading'>The benefits of dental implants:</p>
            <p>
                Implants can last a lifetime and do not decay
                <br />
                Implants integrate into your bone and prevent the bone loss and gum recession that can occur with other types of tooth replacement
                <br />
                Implants look, feel, and function like natural teeth
                <br />
                Implants don't harm your neighboring teeth
            </p>
        </div>
        <Footer />
    </div>
    );
};
export default ImplantDentistry;
