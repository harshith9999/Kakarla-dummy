import * as React from 'react';
import ResponsiveAppBar from '../components/Appbar';
import specialities from '../images/specialities.jpg';
import Footer from '../components/footer/Footer';
import './static.css'

const EstheticDentistry = ({user}) => {
    return (<div>
        <ResponsiveAppBar user={user}/>
        <img src={specialities} alt='specialities' height='400px' width='100%' />
        <div className='veneersbody'>
            <p className='staticheading'>Esthetic Dentistry</p>
            <p>
                Esthetic dentistry is committed to tooth restoration for both esthetic and functional purpose. Knowledge of esthetic dentistry is rapidly expanding and with that, the development of new and improved materials, such as porcelains for thin veneers and strong composites that outlast older filling materials. As well, the development of restorative techniques that use these materials, like tooth contouring and tooth-colored restorations, restore teeth both functionally and esthetically. Through the use of these new materials and techniques, the color, shape, and texture of teeth can now be changed and strengthened for restorative purposes with minimal damage to the tooth surfaces or the surrounding tissue, and while maintaining or improving esthetic quality.
                <br />
                <br />
                When people want to reverse the aging process and achieve a more youthful appearance, they visit a plastic surgeon. However, a key element to achieving a more youthful appearance is rejuvenating your smile, which is at the center of your face and bone structure. Since with age, teeth and bone shrink, the lost bone and tissue must be restored in order to achieve a natural look. Therefore, facial implants and facelifts in conjunction with cosmetic dentistry procedures work towards a beautiful smile, and a more youthful appearance. Additionally, there are esthetic options available to improve your smile.
                <br />
                <br />
                White fillings, or composite resins, are placed in the tooth the same way as traditional fillings. These new materials are proving to be as strong as silver and far more pleasing esthetically. Additionally, the preparation for placing white fillings can be less invasive, especially when using air abrasion. Air abrasion is an effective alternative to a standard dental drill and functions like a sandblaster. An air abrasion tool blows a powerful air stream of tiny aluminum oxide particles onto the tooth structure, which then bounces off the tooth and blasts the decay away. Air abrasion is virtually painless and because it cuts with precision, it removes far less tooth than a drill.
                <br />
                <br />
                Inlays and onlays are similar to composite resin except the filling is pre-made in a dental lab (as opposed to traditional fillings, which are soft to begin with and set in the mouth) and later cemented in place. Inlays and onlays are far more durable than traditional fillings, don't require as much of the actual tooth structure to be removed in order to place them, and actually increase the strength of the tooth by up to 75%, preventing further decay. Inlays and onlays are esthetically pleasing as they can be made to match the tooth color.
                <br />
                <br />
                Crowns are used when the tooth structure is quite damaged and composites or onlays will not work. Crowns are quite esthetically pleasing as they are made of enamel-like porcelain that appears to be natural.
                <br />
                <br />
                While esthetic dentistry is certainly optional, it should not be viewed as a frivolous indulgence. Improving one's appearance can boost self-confidence and improve quality of life. Patients usually feel renewed and attractive after an esthetic dentistry procedure and while some patients tend to hide their mouths before the procedure, they typically leave the dental office with a huge smile on their face.
                <br />
                <br />
                Don't let stains, cracks or chips ruin your smile. Aesthetic dentistry, also called restorative or cosmetic dentistry, can fix unattractive or unhealthy teeth, leaving you with a magazine-cover grin. Aesthetic dentists can use a variety of methods to improve your teeth, depending on your needs. Often, a combination of methods will be used to help you achieve the look you've been dreaming of.
            </p>
            <p className='staticsubheading'>Aesthetic dentists can:</p>
            <p>
                Whiten your teeth
                <br />
                <br />
                Improve gummy smiles
                <br />
                <br />
                Seal gaps
                <br />
                <br />
                Fix chips and cracks
                <br />
                <br />
                Correct rotations
                <br />
                <br />
                Replace worn-down or discolored teeth
            </p>
            <p className='staticsubheading'>Teeth Whitening</p>
            <p>
                Coffee, tea, tobacco, red wine, antibiotics and age can all darken teeth. Patients can choose from two routes to whiter teeth: at-home whitening or in-office whitening.
                <br />
                <br />
                At-home bleaching kits use carbamide peroxide solutions to oxidize and bleach your teeth. Your dentist will create customized trays for your mouth based on plaster molds of your teeth. Place the solution in these trays, then hold the tray in your mouth for the amount of time specified by your dentist. He or she will determine a duration of treatment. In a few weeks, return to your dentist for a follow-up appointment.
                <br />
                <br />
                In-office bleaching (also called chairside, light-activated or one-hour bleaching) uses hydrogen peroxide gels and a heat or light source, these treatments lighten your teeth by six to eight shades in one to three visits, and sometimes less. The light source can be a plasma arc lamp or a laser. The dentist applies the gel to your teeth, then shines the light source, quickening the work of the gel. When a lamp is used, three twenty-minute gel applications are required. When a laser is used, the dentist treats each tooth individually.
                <br />
                <br />
                Over-the-counter toothpastes, kits and peroxide strips are also available from most drugstores; however, these products are used at your own discretion, without the assistance of a dentist.
            </p>
            <p className='staticsubheading'>Porcelain Veneers</p>
            <p>
                Porcelain veneers are thin shells of ceramic fitted over your existing teeth to create a beautiful, natural-looking smile. Veneers are long-lasting, natural-looking and, because they are custom-made based on your needs, can cover up all kinds of problem teeth: chips, overlaps, "short" teeth, crooked teeth, and gaps. Best of all, veneers come in beautiful shades of white, fixing any discoloration worries you might have for years to come. They require three trips to your dentist: consultation, preparation, and application. During the consultation session, you and your dentist will decide on a course of action. During the preparation session, your dentist buffs half a milimetre off your teeth to create room for the veneer, then creates a mold from which your veneers will be made. During the application session, your cosmetic dentist will give you a "trial fitting," then cement the veneers to your teeth.
            </p>
            <p className='staticsubheading'>Bonding</p>
            <p>
                Another option to whiten stained teeth, lengthen short or chipped teeth, and fill in gaps between teeth is dental bonding, a procedure in which a plastic resin is applied to the front surface of a tooth. First, the dentist erodes the tooth and applies phosphoric acid to it. The acid creates tiny crevices in the tooth in which the resin can stick. Next, he or she applies the resin to the tooth and shapes it into an aesthetically pleasing form. A light source cures, or hardens, the resin. The dentist completes the procedure by polishing and smoothing your tooth.
            </p>
            <p className='staticsubheading'>Gum Lift</p>
            <p>
                Sometimes, excessive gum tissue creates the appearance of "short" teeth. An aesthetic dentist can shift gums to a position that reveals more of the teeth and less of the gums. This procedure, also known as crown lengthening or gum re-contouring, sometimes requires cutting out gum and bone around the teeth. Gum lifts are also useful in exposing enough of a damaged or decayed tooth so that a restoration procedure can be performed.
            </p>
            <p className='staticsubheading'>Gingivectomy/Laser Gum Surgery</p>
            <p>
                Surgery is another option for treating a "gummy smile" that covers much of the teeth. In these cases, excess gum tissue (and, if necessary, underlying bone) is removed to expose more of the teeth. This excision can be done using either hand-held instruments, lasers, or a combination of both.
                <br />
                <br />
                Depending on your needs, your aesthetic dentist might combine one or more of the above methods with bridges, crowns, dental implants or orthodontic treatment. Many aesthetic dentists offer free consultations; visit a few dentists to find one that suits your needs.
                <br />
                <br />
                There is no specific specialized training for a general dentist to become an aesthetic dentist. Rather, general dentists can choose the aesthetic services they wish to offer in their office, and must regularly attend hands-on workshops, courses and conferences to remain up-to-date with the latest developments in their field.
            </p>
        </div>
        <Footer />
    </div>
    );
};
export default EstheticDentistry;
