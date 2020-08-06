import React, {useState} from 'react';
import MySlide from './MySlide';

// import * as Func from '../utilities/rotateArray';

// const slides = [<MyComponent0/>, <MyComponent1/>, <MyComponent2/>, <MyComponent3/>]

const Slides = ({slides}) => {
    const [currentSlide, setCurrentSlide] = useState(slides[0]);
    const handleSlideShiftNext = () => {
        slides.push(slides.shift());
        setCurrentSlide(slides[0]);
    }
    const handleSlideShiftPrev = () => {
        slides.unshift(slides.pop());
        setCurrentSlide(slides[0]);
    }
    // const handleSlideNext = () => {
    //     let idx = slides.indexOf(currentSlide);
    //     if(idx<slides.length - 1) idx++;
    //     console.log("index", idx);
    //     setCurrentSlide(slides[idx]);
    // };
    // const handleSlidePrev = () => {
    //     let idx = slides.indexOf(currentSlide);
    //     if(idx>0) idx--;
    //     console.log("index", idx);
    //     setCurrentSlide(slides[idx]);
    // };
    // const handleReset = () => {
    //     setCurrentSlide(slides[0]);
    // };
    return (
        <div>
            <div id="navigation" className="text-center">
                {/* <button data-testid="button-restart" onClick={handleReset} className="small outlined">Restart</button> */}
                {/* <button data-testid="button-prev" onClick={handleSlidePrev} className="small">Prev</button> */}
                <button data-testid="button-prev" onClick={handleSlideShiftPrev} className="small">Prev</button>
                {/* <button data-testid="button-next" onClick={handleSlideNext} className="small">Next</button> */}
                <button data-testid="button-next" onClick={handleSlideShiftNext} className="small">Next</button>
            </div>
            {currentSlide ?  <MySlide currentSlide={currentSlide}/> : ''}
        </div>
    );
};
export default Slides;
