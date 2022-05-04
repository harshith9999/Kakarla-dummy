import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from '../../components/Appbar';
import VideoCard from '../../components/videoCard/VideoCard';
import axios from 'axios';
import './testimonials.css';

const Testimonials = ({ user }) => {
    const [lecture, setLecture] = useState()

    const fetchData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/video`)
        setLecture(response.data.data)
    }
    useEffect(() => {
        fetchData()
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div >
            <ResponsiveAppBar user={user} />
            <div className="grid-container">
            {lecture?.map((item) => <div className="grid-item"> <VideoCard title={item.title} description={item.description} url={item.url} /></div>)}
            </div>
        </div>

    )
}
export default Testimonials;