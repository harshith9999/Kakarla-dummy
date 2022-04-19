import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import testimonials from '../../images/testimonials.png';
import Typography from '@mui/material/Typography';
import './carousel.css';

const MaterialCarousel = () => {
    const carouselArr = [
        { id: 1, message: "We knew everything they did, without my sister-in-law having to remember it all and repeat it to us. It was wonderful! Everyone could keep up with the situation. Then, the best part!! We got to hear my brother's voice! Best moment ever!",
         givenBy: "Julie W." },
        { id: 2, message: "We knew everything they did, without my sister-in-law having to remember it all and repeat it to us. It was wonderful! Everyone could keep up with the situation. Then, the best part!! We got to hear my brother's voice! Best moment ever!",
         givenBy: "Abdulla." },
        { id: 3, message: "We knew everything they did, without my sister-in-law having to remember it all and repeat it to us. It was wonderful! Everyone could keep up with the situation. Then, the best part!! We got to hear my brother's voice! Best moment ever!",
         givenBy: "Mahesh babu. " },
        { id: 4, message: "We knew everything they did, without my sister-in-law having to remember it all and repeat it to us. It was wonderful! Everyone could keep up with the situation. Then, the best part!! We got to hear my brother's voice! Best moment ever!",
         givenBy: "Chiranjeevi." },
    ];
    const widthBreakpointsArr = (width) => {
        if (width < 576) return 1;
        else if (width > 575 && width < 768) return 1;
        else if (width > 767 && width < 992) return 1;
        else if (width > 991 && width < 1200) return 1;
        else if (width > 1199 && width < 1400) return 2;
        else if (width > 1399) return 2;
    };

    const generateCarousel = (carouselArr) => {
        let renderArr = [];
        let n = widthBreakpointsArr(window.screen.width);
        for (let i = 0; i < carouselArr.length / n; i++) {
            let subArr = carouselArr.slice(i * n, i * n + n);
            renderArr.push(generateCarouselCards(subArr));
        }
        return < Carousel
            interval={4000}
            animation="slide"
            stopAutoPlayOnHover
            indicators={false}
            swipe
            className="carouselbody" >{renderArr}</ Carousel>;
    };
    const generateCarouselCards = (arr) => {
        return (
            <div className='mycarousel'>
                {arr.map((el) => (
                    <Card key={el.id} className='first' >
                        <img src={testimonials} alt="" className='test' />
                        <CardContent>
                            <Typography gutterBottom component="div" variant="h6" className='content'>
                                {el.message}
                            </Typography>
                            <Typography className="name">{el.givenBy} </Typography>
                        </CardContent>
                    </Card >
                ))}
            </div>
        );
    };

    return (
        generateCarousel(carouselArr)
    )
}
export default MaterialCarousel;
