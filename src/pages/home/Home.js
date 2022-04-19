import * as React from 'react';
import Achievements from '../../components/achievements/Achievements';
import ResponsiveAppBar from '../../components/Appbar';
import Banner from '../../components/banner/Banner';
import MaterialCarousel from '../../components/carousel/Carousel';
import Footer from '../../components/footer/Footer';
import './home.css'

const Home = ({user}) => {

    return (
        <div>
            <ResponsiveAppBar user={user} />
            <Banner/>
            <Achievements/>
            <MaterialCarousel/>
            <Footer/>
        </div>
    )
}
export default Home;