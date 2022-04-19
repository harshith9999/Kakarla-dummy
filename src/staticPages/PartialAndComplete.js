import * as React from 'react';
import ResponsiveAppBar from '../components/Appbar';
import specialities from '../images/specialities.jpg';
import Footer from '../components/footer/Footer';
import './static.css'

const PartialAndComplete = ({user}) => {
    return (<div>
        <ResponsiveAppBar user={user}/>
        <img src={specialities} alt='specialities' height='400px' width='100%' />
        <div className='veneersbody'>
            <p className='staticheading'>Partial and Complete Dentures</p>
            <p className='staticsubheading'>Complete Dentures</p>
            <p>
                Complete dentures can be either "conventional" or "immediate." Made after the teeth have been removed and the gum tissue has begun to heal, a conventional denture is ready for placement in the mouth about eight to 12 weeks after the teeth have been removed.
                <br />
                <br />
                Unlike conventional dentures, immediate dentures are made in advance and can be positioned as soon as the teeth are removed. As a result, the wearer does not have to be without teeth during the healing period. However, bones and gums shrink over time, especially during the healing period following tooth removal. Therefore a disadvantage of immediate dentures compared with conventional dentures is that they require more adjustments to fit properly during the healing process and generally should only be considered a temporary solution until conventional dentures can be made.
            </p>
            <p className='staticsubheading'>Partial Dentures</p>
            <p>
                A removable partial denture or bridge usually consists of replacement teeth attached to a pink or gum-colored plastic base, which is connected by metal framework that holds the denture in place in the mouth. Partial dentures are used when one or more natural teeth remain in the upper or lower jaw. A fixed (permanent) bridge replaces one or more teeth by placing crowns on the teeth on either side of the space and attaching artificial teeth to them. This "bridge" is then cemented into place. Not only does a partial denture fill in the spaces created by missing teeth, it prevents other teeth from changing position. A precision partial denture is removable and has internal attachments rather than clasps that attach to the adjacent crowns. This is a more natural-looking appliance.
            </p>
            <p className='staticsubheading'>Are There Alternatives to Dentures?</p>
            <p>
                Yes, dental implants can be used to support permanently cemented bridges, eliminating the need for a denture. The cost is usually greater, but the implants and bridges more closely resemble the feel of real teeth. Dental implants are becoming the alternative to dentures but not everyone is a candidate for implants. Consult your dentist for advice.
            </p>
            <p className='staticsubheading'>Does Insurance Cover the Cost of Dentures?</p>
            <p>
                Most dental insurance providers cover some or all of the cost of dentures. However, contact your company to find out the specifics of what they will cover.
            </p>
            <p className='staticsubheading'>How Are Dentures Made?</p>
            <p>
                The denture development process takes about `10 days with several appointments. Once your dentist or prosthodontist (a dentist who specializes in the restoration and replacement of teeth) determines what type of appliance is best for you, the general steps are to:
                <br />
                <br />
                Make a series of impressions of your jaw and take measurements of how your jaws relate to one another and how much space is between them.
                <br />
                <br />
                Create models, wax forms, and/or plastic patterns in the exact shape and position of the denture to be made. You will "try in" this model several times and the denture will be assessed for color, shape, and fit before the final denture is cast.
                <br />
                <br />
                Cast a final denture
                <br />
                <br />
                Adjustments will be made as necessary
            </p>


        </div>
        <Footer />
    </div>
    );
};
export default PartialAndComplete;
