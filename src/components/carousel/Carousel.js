import React, { useEffect, useState } from 'react'
import './Carousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LightSpeed from 'react-reveal/LightSpeed';

import Project from '../../JSON/Projects.json'


export default function Carousel() {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        });
      } else {
        setSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-3/4 m-auto mb-20'>
      <div className="my-prof-div">
        <p className="my-profiles">My Projects</p>
      </div>

      <LightSpeed left>
        <div className="mt-5">
          <Slider {...settings}>
            {Project.map((d) => (
              <div key={d.name} className="bg-white h-[450px] mt-10 text-black rounded-xl border-2 border-solid border-black mb-5 custom-height hover:transform hover:scale-105 hover:transition duration-3000">
                <div className='flex items-center justify-center p-3 h-50 bg-gradient-to-r from-indigo-700 to-blue-500 rounded-t-xl'>
                  <img src={d.img} alt="" className="rounded-full h-44 w-44" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold text-center">{d.name}</p>
                  <div className='flex flex-row'>
                    {d.HTML && (
                      <span class="designer">{d.HTML}</span>
                    )}
                    {d.CSS && (
                      <span class="designer">{d.CSS}</span>
                    )}
                    {d.Javascript && (
                      <span class="designer">{d.Javascript}</span>
                    )}
                    {d.Java && (
                      <span class="designer">{d.Java}</span>
                    )}
                    {d.ReactJS && (
                      <span class="designer">{d.ReactJS}</span>
                    )}
                    {d.Python && (
                      <span class="designer">{d.Python}</span>
                    )}
                    {d.AI && (
                      <span class="designer">{d.AI}</span>
                    )}
                    {d.ML && (
                      <span class="designer">{d.ML}</span>
                    )}
                    {d.Kotlin && (
                      <span class="designer">{d.Kotlin}</span>
                    )}
                    {d.Jetpack && (
                      <span class="designer">{d.Jetpack}</span>
                    )}
                    {d.API && (
                      <span class="designer">{d.API}</span>
                    )}
                    {d.Figma && (
                      <span class="designer">{d.Figma}</span>
                    )}
                    {d.Dart && (
                      <span class="designer">{d.Dart}</span>
                    )}
                    {d.Tailwind && (
                      <span class="designer">{d.Tailwind}</span>
                    )}
                    {d.Scss && (
                      <span class="designer">{d.Scss}</span>
                    )}
                    {d.Bootstrap && (
                      <span class="designer">{d.Bootstrap}</span>
                    )}
                  </div>
                  <p className="text-center">{d.review}</p>
                  <div className='flex flex-row items-center justify-center'>
                    <a href={d.link} target="_blank" rel="noreferrer">
                      <button className='px-5 py-1 text-lg text-white transition duration-500 bg-gradient-to-r from-indigo-700 to-blue-500 rounded-xl hover:from-blue-500 hover:to-indigo-700'>Code</button>
                    </a>
                    {d.website && (
                      <a href={d.website} target="_blank" rel="noreferrer">
                        <button className='px-5 py-1 ml-5 text-lg text-white transition duration-500 bg-gradient-to-r from-indigo-700 to-blue-500 rounded-xl hover:from-blue-500 hover:to-indigo-700'>Website</button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </LightSpeed>

    </div>
  );
}
