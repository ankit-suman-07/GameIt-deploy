import React, { useState } from "react";
import "./ImageSlider.css";
import SliderImage_1 from "../../assets/slider_1.png";
import SliderImage_2 from "../../assets/slider_2.png";
import SliderImage_3 from "../../assets/slider_3.png";
import SliderImage_4 from "../../assets/slider_4.png";
import SliderImage_5 from "../../assets/slider_5.png";

import ArrowRightIcon from '../../assets/right.png';
import ArrowLeftIcon from '../../assets/left.png';


const ImageSlider = () => { // takes in images as props
    const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0
    const images = [
        SliderImage_1,
        SliderImage_2,
        SliderImage_3,
        SliderImage_4,
        SliderImage_5,
    ];


    const slideRight = () => {
        setIndex((index + 1) % images.length); // increases index by 1
    };

    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(images.length - 1); // returns last index of images array if index is less than 0
        } else {
            setIndex(nextIndex);
        }
    };

    return (
        images.length > 0 && (
            <div className="image-slider-outer" >
                <div className='image-slider' >
                    <button onClick={slideLeft} className="left-btn" >
                        <img src={ArrowLeftIcon} alt="left-btn" />
                    </button>
                    <img src={images[index]} alt={index} />
                    <button onClick={slideRight} className="right-btn" >
                        <img src={ArrowRightIcon} alt="right-btn" />
                    </button>
                </div>
            </div>
        )
    );
};

export default ImageSlider;