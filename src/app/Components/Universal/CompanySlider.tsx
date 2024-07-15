// components/Responsive.tsx
import React from 'react';
import Slider from 'react-slick';



const CompanySlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="bg-gray-200 p-4">
          <h3>1</h3>
        </div>
        <div className="bg-gray-200 p-4">
          <h3>2</h3>
        </div>
        <div className="bg-gray-200 p-4">
          <h3>3</h3>
        </div>
        <div className="bg-gray-200 p-4">
          <h3>4</h3>
        </div>
        <div className="bg-gray-200 p-4">
          <h3>5</h3>
        </div>
        <div className="bg-gray-200 p-4">
          <h3>6</h3>
        </div>
        <div className="bg-gray-200 p-4">
          <h3>7</h3>
        </div>
        <div className="bg-gray-200 p-4">
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  );
};

export default CompanySlider;
