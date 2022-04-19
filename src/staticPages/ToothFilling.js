import * as React from 'react';
import ResponsiveAppBar from '../components/Appbar';
import specialities from '../images/specialities.jpg';
import Footer from '../components/footer/Footer';
import './static.css'

const ToothFilling = ({user}) => {
    return (<div>
        <ResponsiveAppBar user={user}/>
        <img src={specialities} alt='specialities' height='400px' width='100%' />
        <div className='veneersbody'>
            <p className='staticheading'>Tooth Filling</p>
            <p className='staticsubheading'>What is a Filling?</p>
            <p>
                A filling is a way to restore a tooth damaged by decay back to its normal function and shape. When a dentist gives you a filling, he or she first removes the decayed tooth material, cleans the affected area, and then fills the cleaned out cavity with a filling material.
                <br />
                <br />
                By closing off spaces where bacteria can enter, a filling also helps prevent further decay. Materials used for fillings include gold, porcelain a composite resin (tooth-colored fillings), and a amalgam(an alloy of mercury, silver, copper, tin and sometimes zinc).
                <br />
                <br />
                Which Type of Filling is Best?
                No one type of filling is best for everyone. What's right for you will be determined by the extent of the repair, whether you have allergies to certain materials, where in your mouth the filling is needed, and the cost. Considerations for different materials include:
            </p>
            <p className='staticsubheading'>Gold fillings
                <span className='pspecialists'> are made to order in a laboratory and then cemented into place. Gold inlays are well tolerated by gum tissues, and may last more than 20 years. For these reasons, many authorities consider gold the best filling material.
                </span>
            </p>
            <p className='staticsubheading'>Amalgam (silver)
                <span className='pspecialists'>  fillings are resistant to wear and relatively inexpensive. However, due to their dark color, they are more noticeable than porcelain or composite restorations and are not usually used in very visible areas, such as front teeth.
                </span>
            </p>
            <p className='staticsubheading'>Composite (plastic)
                <span className='pspecialists'> resins are matched to be the same color as your teeth and therefore used where a natural appearance is desired. The ingredients are mixed and placed directly into the cavity, where they harden. Composites may not be the ideal material for large fillings as they may chip or wear over time. They can also become stained from coffee, tea or tobacco, and do not last as long as other types of fillings generally from three to 10 years.
                </span>
            </p>
            <p className='staticsubheading'>Porcelain fillings
                <span className='pspecialists'>  are called inlays or onlays and are produced to order in a lab and then bonded to the tooth. They can be matched to the color of the tooth and resist staining. A porcelain restoration generally covers most of the tooth. Their cost is similar to gold.
                    <br />
                    <br />
                    If decay or a fracture has damaged a large portion of the tooth, a crown, or cap may be recommended. Decay that has reached the nerve may be treated in two ways: through root canal therapy (in which nerve damaged nerve is removed) or through a procedure called pulp capping (which attempts to keep the nerve alive).
                </span>
            </p>
            <p className='staticsubheading'>What Happens When You get a Filling?</p>
                <p > If your dentist decides to fill a cavity, he or she will first remove the decay and clean the affected area. The cleaned-out cavity will then be filled with any of the variety of materials described above.
                </p>
            <p className='staticsubheading'>How Do I Know if I Need a Filling?</p>
                <p >
                    Only your dentist can detect whether you have a cavity that needs to be filled. During a checkup, your dentist will use a small mirror to examine the surfaces of each tooth.
                    <br />
                    <br />
                    Anything that looks abnormal will then be closely checked with special instruments. Your dentist may also xray your entire mouth or a section of it. The type of treatment your dentist chooses will depend on the extent of damage caused by decay.
                </p>
        </div>
        <Footer />
    </div>
    );
};
export default ToothFilling;
