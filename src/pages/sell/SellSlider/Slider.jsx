import React, { useEffect, useState } from 'react';
import Slide2 from './Slide2';
import Slide1 from './Slide';
import Slide3 from './Slide3';
import './Slider.css';

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

// Move the compo array outside the component to avoid re-creation on every render
const compo = [<Slide2 />, <Slide1 />, <Slide3 />];

function Slider() {
    let [cnt, setCnt] = useState(0);
    let [src, setSrc] = useState(compo[cnt]);

    function Prew() {
        setCnt(prevCnt => (prevCnt === 0 ? 2 : prevCnt - 1)); // Use functional update
    }

    function Next() {
        setCnt(prevCnt => (prevCnt === 2 ? 0 : prevCnt + 1)); // Use functional update
    }

    useEffect(() => {
        setSrc(compo[cnt]);
    }, [cnt]);

    return (
        <div>
            <div className="sliderSell">
                <button className='prew1' onClick={Prew}><FaChevronLeft /></button>
                <button className='next1' onClick={Next}><FaChevronRight /></button>
                {src}
            </div>
        </div>
    );
}

export default Slider;
