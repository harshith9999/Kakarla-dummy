import React from 'react';
import './achievement.css'

const Achievements = () => {
    
    return (
        <div className='achieveDiv' >
            <div className='numbdiv'>
            <p className="numbers">100+</p>
                <p className="achieveHolders">IITians</p>
            </div>
            <div className='numbdiv'>
            <p className="numbers">1000+</p>
                <p className="achieveHolders">Revision Lectures</p>
            </div>
            <div className='numbdiv'>
            <p className="numbers">3000+</p>
                <p className="achieveHolders">Happy Students</p>
            </div>
            <div className='numbdiv'>
            <p className="numbers">5</p>
                <p className="achieveHolders">Years of Experience</p>
            </div>
        </div>
    )
}
export default Achievements;