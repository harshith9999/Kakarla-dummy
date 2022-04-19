import React, { useState } from 'react';
import AnimatedNumber from "animated-number-react";
import './achievement.css'

const Achievements = () => {
    const [count, setCount] = useState({ count1: '0', count2: '0', count3: '0', count4: '0', count5: '0' })
    const formatValue = value => Number(value).toFixed(0);
    const handleCount = () => {
        setCount({ count1: '59', count2: '26', count3: '18', count4: '12', count5: '14' })
    }
    return (
        <div className='achieveDiv' onMouseOver={handleCount}>
            <div className='numbdiv'>
                <AnimatedNumber value={count.count1} duration={3000} formatValue={formatValue} />
                <p className="achieveHolders">Great Dentists</p>
            </div>
            <div className='numbdiv'>
                <AnimatedNumber value={count.count2} duration={3000} formatValue={formatValue} />
                <p className="achieveHolders">Dental Specialities</p>
            </div>
            <div className='numbdiv'>
                <AnimatedNumber value={count.count3} duration={3000} formatValue={formatValue} />
                <p className="achieveHolders">Dental Services</p>
            </div>
            <div className='numbdiv'>
                <AnimatedNumber value={count.count4} duration={3000} formatValue={formatValue} />
                <p className="achieveHolders">National Awards</p>
            </div>
            <div className='numbdiv'>
                <AnimatedNumber value={count.count5} duration={3000} formatValue={formatValue} />
                <p className="achieveHolders">Years of Experience</p>
            </div>
        </div>
    )
}
export default Achievements;