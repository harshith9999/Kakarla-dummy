import * as React from 'react';
import ResponsiveAppBar from '../../components/Appbar';
import ContactForm from '../../components/contact/contactForm';
import ContactInformation from '../../components/contact/contactInformation';
import Footer from '../../components/footer/Footer';
import './contact.css'

const Contact = ({user}) => {
 
  return (
    <div>
      <ResponsiveAppBar user={user}/>
      <div className='contactRow'>
        <ContactForm />
        <ContactInformation />
        <div className='maps'>
        <iframe width="100%" height="100%" style={{border:0}} loading="lazy" allowfullscreen title="myMap"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJzQNBFgFLTToRojkXMcn9l58&key=AIzaSyD1ROqtXpFy3aEN7ZJBbhCto39dYhfFHZs">
        </iframe>
         
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Contact;