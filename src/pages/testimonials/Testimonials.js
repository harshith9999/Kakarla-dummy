import * as React from 'react';
import ResponsiveAppBar from '../../components/Appbar';
import VideoCard from '../../components/videoCard/VideoCard';
import './testimonials.css';

const Testimonials = ({user}) => {

    return (
            <div>
            <ResponsiveAppBar user={user} />
            <div className="videoflex">
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            </div>
            <div className="videoflex">
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            </div>
            <div className="videoflex">
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            </div>
            </div>
    )
}
export default Testimonials;