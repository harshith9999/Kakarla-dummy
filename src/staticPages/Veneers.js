import * as React from 'react';
import ResponsiveAppBar from '../components/Appbar';
import specialities from '../images/specialities.jpg';
import Footer from '../components/footer/Footer';
import './static.css'

const Veneers = ({user}) => {
    return (<div>
        <ResponsiveAppBar user={user}/>
        <img src={specialities} alt='specialities' height='400px' width='100%' />
        <div className='veneersbody'>
            <p className='staticheading'>Veneers / Laminates</p>
            <p >
                Dental Veneers are thin, individual hand crafted wafers of porcelain or plastic, which can be bonded to your teeth to change their shape, color or alignment. Often an alternative to crowns, dental veneers look completely natural and are made of a very durable ceramic material that actually strengthens your tooth! It is very common for people to have imperfect teeth, either oddly shaped teeth, chipped teeth, crooked teeth, teeth with small holes in them, or an inappropriate sized tooth or teeth that have an odd appearance. Dental Veneer solve such irregularities and create a durable and pleasing smile.
                <br />
                There are two tooth veneers procedures available that correct discoloration of the teeth by removing the brown and yellow staining. While each work effectively, there are advantages and disadvantages to each procedure dependent upon your objectives and commitment to the processes. The type of procedures available should be discussed with your cosmetic dentist, and they will recommend the most appropriate tooth veneers procedure for you.
            </p>
            <p className='staticsubheading'>Porcelain Veneer Procedure</p>
            <p>
                Only the teeth that show are veneered and this procedure can be carried out on both the upper and lower teeth. Teeth are prepared for veneers by lightly buffing to allow for the small added thickness of the veneer. Veneers are created from an impression taken in your cosmetic dentist's office. Your custom veneer is then placed directly onto your tooth with water or glycerin to verify their perfect fit and the shade or color. The color cannot be changed after the veneers are adhered to your teeth. The tooth is then cleansed with chemicals to achieve a durable bond. Once the glue is between the veneer and your tooth, a light beam is used to harden the glue/cement. Usually porcelain veneers require two visits and also require a dental laboratory to create the final tooth restoration piece.
            </p>
            <p className='staticsubheading'>  Composite Veneer Procedure</p>
            <p>
                Composite (direct) veneers are usually performed in a single visit to your cosmetic dentist. The procedure is an application of a bond and enamel directly to the tooth's surface.
            </p>
            <p className='staticsubheading'>
                Advantages & Disadvantages of Dental Veneers
            </p>
            <p>
                Advantages Dental Veneers:
                Typically costing less than dental crowns, dental veneers won't stain, making dental veneers a very popular solution for many people seeking that perfect smile. The primary advantages are the beauty and durability of the material. Veneers last from ten to fifteen years, and come in colors that will brighten dark teeth without the worry of them changing color. Because porcelain doesn't stain like composite resin, it remains attractive for a much longer period of time, making veneers a very popular solution for many people seeking that perfect smile. In addition, gum tissues tolerate porcelain well, thus reducing the likelihood that gum problems will develop. An advantage of veneers over crowning is that you will keep more of your original tooth.
                <br />
                Dental veneers are typically done in only two one and a half hour long appointments, and can actually strengthen your tooth. Following the two visits there is no additional maintenance, other than daily brushing and regular check-ups. You will have a brighter whiter smile which will improve your confidence in many different aspects of your life.
                <br />
                Disadvantages Dental Veneers:
                It normally takes a week or two to adjust to any change in the size, spacing or shape of your teeth. While very little tooth is removed in most cases, there are times when more tooth must be removed and this increases the risk of trauma to the tooth. The amount of tooth to be removed for the veneers should be discussed with your cosmetic dentist beforehand.
                <br />
                Dental veneers are very reasonable facsimiles of natural teeth, but not perfect replacements for natural teeth. It's common to see slight variations in the color of veneers upon very close inspection, as with natural teeth.
            </p>
        </div>
        <Footer />
    </div>
    );
};
export default Veneers;
