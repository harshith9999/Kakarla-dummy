import * as React from 'react';
import ResponsiveAppBar from '../../components/Appbar';
import Footer from '../../components/footer/Footer';
import g5 from '../../images/g5.jpg';
import './about.css';

const About = ({user}) => {

    return (
        <div>
            <ResponsiveAppBar user={user}/>
            <div className='abt'>
                <div className='abtstory'>
                    <div className='ourstory'>
                        <p className='abtTitle'>Our Story</p>
                        <p className='abtsub'>The idea for medcorder came from our founder, David, whose dad Gordon was fighting prostate cancer. </p>
                        <p>Having already lost his mom to lung cancer, David saw how much information was presented orally in doctor-patient consults, and never repeated. This information was dense, nuanced, and discussed far more quickly than most people can type or write.</p>
                        <p>Consequently Gordon made sure to record all of his medical meetings and email them as an attachment to David, who would manually transcribe them, summarize them, and explain technical terms like medications, conditions, or procedures. </p>
                        <p>This was super helpful for keeping the family in the loop but was also a huge amount of work. David saw that an app could be built to make this process easy for anyone facing any complex medical condition, so he began working on the first version of medcorder in late 2018.</p>
                    </div>
                    <div className='ourvideo'>
                    <iframe width="100%" height="100%" title="About Page Video" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                    </div>
                </div>
                <div className='abtdoctors'>
                    <p className='abtTitle'>Meet the Team</p>
                    <p>Our team is a mixture of silicon valley veterans and highly skilled contractors.around the world.
                        ag is used to incorporate in-line graphics (typically icons or small graphics) into an HTML document.
                        This element is NOT intended for embedding other HTML text.a book or other written or printed work, regarded in terms of its content rather than its physical form.
                        the main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations.</p>
                </div>
                <div className='abtcontainer'>
                    <div className='abtdoctor'>
                        <img src={g5} alt='Doctor' className='abtimages'></img>
                        <p className='doctorname'>DAVID E. WEEKLY</p>
                        <p className='margin'>Founder &CEO</p>
                        <p className='docexp'>Stanford CS, Google & Facebook product management built two companies previously</p>
                    </div>
                    <div className='abtdoctor'>
                        <img src={g5} alt='Doctor' className='abtimages'></img>
                        <p className='doctorname'>DAVID E. WEEKLY</p>
                        <p className='margin'>Founder &CEO</p>
                        <p className='docexp'>Stanford CS, Google & Facebook product management built two companies previously</p>
                    </div>
                    <div className='abtdoctor'>
                        <img src={g5} alt='Doctor' className='abtimages'></img>
                        <p className='doctorname'>DAVID E. WEEKLY</p>
                        <p className='margin'>Founder &CEO</p>
                        <p className='docexp'>Stanford CS, Google & Facebook product management built two companies previously</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default About;