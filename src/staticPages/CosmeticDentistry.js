import * as React from 'react';
import ResponsiveAppBar from '../components/Appbar';
import specialities from '../images/specialities.jpg';
import Footer from '../components/footer/Footer';
import './static.css'

const CosmeticDentistry = ({user}) => {
    return (<div>
        <ResponsiveAppBar user={user}/>
        <img src={specialities} alt='specialities' height='400px' width='100%' />
        <div className='veneersbody'>
            <p className='staticheading'>Cosmetic Dentistry</p>
            <p >
                Cosmetic dentistry blends function with beauty by combining tooth reconstruction with plastic surgery procedures on the mouth tissues (gums, jawbones, facial muscles, lips, and skin) to result in a better-looking smile.
                <br />
                <br />
                Generally speaking, when people want to reverse the aging process and achieve a more youthful appearance, they visit a plastic surgeon. However, a key element to achieving a more youthful appearance is rejuvenating your smile, which is at the center of your face and bone structure. Since with age, teeth and bone shrink, the lost bone and tissue must be restored in order to achieve a natural look. Therefore, facial implants and facelifts in conjunction with cosmetic dentistry procedures work towards a beautiful smile, and a more youthful appearance.
                <br />
                <br />
                When reconstructing a smile, lip and mouth shape must be examined. Lip support is normally adequate provided that the teeth are properly contoured and that the jaw is aligned correctly. However, lip support can be corrected in the case that it is inadequate. The chin also shapes the lips and the fullness of the chin can be increased through plastic surgery to improve the lip shape and also to improve facial symmetry. Facial muscles control the smile and should be operated on once necessary corrections have been made to the teeth and jawbones. Cheeks work to lift the corner of the smile and sagging facial tissue should be "lifted." Plastic surgery to the nose will also improve the smile as the nose helps to proportion the smile and balance the face. Wrinkles around the mouth can be corrected through chemical peels or Botox injections in combination with a facelift.
                <br />
                <br />
                Jawbone structure helps to shape the face and smile as a misaligned jaw can divert attention away from the smile. Gaps in the mouth also draw attention and there are many procedures currently available for replacing missing teeth. The cosmetic options for restoring single teeth are the following:
                <br />
                <br />
                Bonded (Maryland) dental bridges uses the adjacent teeth to help support the bridge. This is achieved by bonding a very thin piece of metal or tooth-colored material to the back of the adjacent teeth, which holds the replacement tooth in place. Bonded bridges depend on the strength of the bonding, and unfortunately one out of four bonded bridges comes off within the first five years. However, the advantage is that there is no damage done to the adjacent teeth.
                <br />
                <br />
                Cantilevered dental bridges use only one adjacent tooth to support the bridge and can work similar to bonded bridges, by attaching a piece of material to the back of the tooth, but typically involve using a full crown to support the missing tooth. By using a crown these bridges last much longer than bonded bridges, however they do affect the adjacent tooth because it has to be grinded down in order to place the crown.
                <br />
                <br />
                Conventional dental bridges uses crowns on the teeth next to the empty space that are hooked together to support the replacement tooth. This is usually the bridge of choice when the adjacent teeth already need to be crowned for other reasons.
                <br />
                <br />
                Dental implants are by far the most functional and aesthetically pleasing option for tooth replacement. A dental implant is a titanium screw that is placed directly into the bone and functions as an artificial tooth root. Dental implants have a very high success rate, however, the two-step procedure is lengthy (around 9 months).
                <br />
                <br />
                Those considering a fresh smile should consult with a cosmetic dentist and plastic surgeon. As technology advances and cosmetic procedures are more readily available, people are changing their perceptions of aging and are willing to dedicate necessary resources to improve their appearance.
            </p>
        </div>
        <Footer />
    </div>
    );
};
export default CosmeticDentistry;
