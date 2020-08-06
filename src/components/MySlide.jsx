import React from 'react';

const MySlide = ({currentSlide}) => {
  return (
    <div id="slide" className="card text-center">
        <h1 data-testid="title">{currentSlide.title}</h1>
        <p data-testid="text">{currentSlide.text}</p>
    </div>
  );
};
export default MySlide;