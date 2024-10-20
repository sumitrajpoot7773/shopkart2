import React, { useEffect, useState } from 'react'
import  './Slider.css'

//? Slider Images - Move this outside the component
import one from '../../Assests/SliderImages/one.jpg'
import two from '../../Assests/SliderImages/two.webp'
import three from '../../Assests/SliderImages/three.webp'
import five from '../../Assests/SliderImages/five.webp'
import four from '../../Assests/SliderImages/four.webp'

//? React Icons
import { MdArrowRight } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";

// Moving imgurl array outside Slide component to avoid redefining it on every render
const imgurl = [one, two, three, four, five];

function Slide() {
    let [cnt, setCnt] = useState(0);
    let [src, setSrc] = useState(imgurl[cnt]);

    function Prew() {
        cnt === 0 ? setCnt(4) : setCnt(cnt - 1);
    }

    function Next() {
        cnt === 4 ? setCnt(0) : setCnt(cnt + 1);
    }

    useEffect(() => {
        setSrc(imgurl[cnt]);
    }, [cnt]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         Next();
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className='slider'>
            <button className='prew' onClick={Prew}><IoMdArrowDropleft className='icon' /></button>
            <button className='next' onClick={Next}><MdArrowRight className='icon' /></button>
            <img src={src} alt="img src" />
        </div>
    );
}

export default Slide;
