import * as React from 'react';
import ResponsiveAppBar from '../components/Appbar';
import specialities from '../images/specialities.jpg';
import Footer from '../components/footer/Footer';
import './static.css'

const Orthodontics = ({user}) => {
    return (<div>
        <ResponsiveAppBar user={user}/>
        <img src={specialities} alt='specialities' height='400px' width='100%' />
        <div className='veneersbody'>
            <p className='staticheading'>Orthodontics (Braces)</p>
            <p>
                Orthodontics is the art of aligning the teeth and jaws to improve the patient's smile and oral health. It is recommended that a child be seen by an orthodontist early on so as to form a baseline on development of the child's arch and jaw. If braces are needed, placement usually occurs between ten and fourteen years old. The reason for this age is due to the fact that the mouth and head are still growing. Braces are worn depending on each individual case. The average length of time is between eighteen and thirty months which is followed by wearing a retainer for a few months to allow the tissues and bones to form around new tooth position. With braces, oral hygiene is more important than ever before. Due to the appliances and tiny spaces that they contain, food and plaque get trapped. Decalcification and cavities can form quickly so children must brush more often. The use of fluoride toothpastes and rinses are also recommended to protect the teeth.
            </p>

        </div>
        <Footer />
    </div>
    );
};
export default Orthodontics;
