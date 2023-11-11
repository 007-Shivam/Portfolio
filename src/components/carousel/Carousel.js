import React, { useEffect, useState } from 'react'
import './Carousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ACM from '../../assets/projects/acm.jpg'
import AI from '../../assets/projects/ai.png'
import ATM from '../../assets/projects/atm.jpg'
import BVP from '../../assets/projects/bvp.jpg'
import Cosmos from '../../assets/projects/cosmos.jpg'
import Eye from '../../assets/projects/eye.jpg'
import Feedfolks from '../../assets/projects/feed.jpg'
import IronMan from '../../assets/projects/ironman.gif'
import Jarvis from '../../assets/projects/jarvis.jpg'
import LittleLemon from '../../assets/projects/lemon.jpg'
import MealPlanner from '../../assets/projects/meal.png'
import Quiz from '../../assets/projects/quiz.jpg'
import Restaurant from '../../assets/projects/res.png'
import Weather from '../../assets/projects/weather.png'


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
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-white h-[450px] mt-10 text-black rounded-xl border-2 border-solid border-black mb-5 custom-height hover:transform hover:scale-105 hover:transition duration-3000">
              <div className='h-56 bg-gradient-to-r from-indigo-700 to-blue-500 flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <a href={d.link} target="_blank" rel="noreferrer">
                  <button className='bg-gradient-to-r from-indigo-700 to-blue-500 text-white text-lg px-6 py-1 rounded-xl transition duration-500 hover:from-blue-500 hover:to-indigo-700'>Link</button>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `Eye State Prediction`,
    img: Eye,
    review: `Utilizing Machine Learning to Detect Eye Openness/Closure from EEG Data.
    Research Paper submitted at IEEE.`,
    link: 'https://github.com/007-Shivam/Eye_State_Prediction'
  },
  {
    name: `BVDUDET ACM-SC Website`,
    img: ACM,
    review: `Website for BVPDET ACM Students Chapter, fostering community and advancing computing knowledge among members.`,
    link: 'https://github.com/BVDUDET-ACM-Student-Chapter/BVDUDET-ACM-Website'
  },
  {
    name: `Little Lemon`,
    img: LittleLemon,
    review: `Little Lemon is a delightful restaurant menu browsing app developed using Kotlin
    Jetpack Compose.`,
    link: 'https://github.com/007-Shivam/Little_Lemon'
  },
  {
    name: `CSE-AIML Website`,
    img: BVP,
    review: `A website created for my College for the CSE-AIML branch of engineering for
    students, parents, and teachers.`,
    link: 'https://github.com/007-Shivam/CSE-AIML-Website'
  },
  {
    name: `Simple Quiz App`,
    img: Quiz,
    review: `A Dart-based quiz app for interactive knowledge tests, providing instant feedback to users on their answers.`,
    link: 'https://github.com/007-Shivam/simplequizapp'
  },
  {
    name: `Weather App`,
    img: Weather,
    review: `A Python GUI program in which you enter the city, and it will show you the current weather
    condition of that city.`,
    link: 'https://github.com/007-Shivam/weatherapp'
  },
  {
    name: `Feedfolks`,
    img: Feedfolks,
    review: `Mobile app designed to aid in feeding the hungry, streamlining assistance to those in need.`,
    link: 'https://github.com/007-Shivam/FeedFolks'
  },
  {
    name: `Restaurant Reservation System Design`,
    img: Restaurant,
    review: `UI design for reservation system of a restaurant.`,
    link: 'https://github.com/007-Shivam/Restaurant_Reservation_System_Design'
  },
  {
    name: `Meal Planner Expert System`,
    img: MealPlanner,
    review: `A Python Program with a knowledge base to suggest a nutritional intake
    according to BMR calculated.`,
    link: 'https://github.com/007-Shivam/Meal_Planner_Expert_System'
  },
  {
    name: `AI Mental Health Tracker`,
    img: AI,
    review: `A predictive model for monitoring and tracking mental health using artificial intelligence and machine learning models.`,
    link: 'https://github.com/007-Shivam/AI_Mental_Health_Tracker'
  },
  {
    name: `Simple Jarvis Assistant`,
    img: Jarvis,
    review: `Python virtual assistant performing tasks: time/date updates, Wikipedia searches, website openings, and more.`,
    link: 'https://github.com/007-Shivam/Basic_Jarvis_Assistant'
  },
  {
    name: `Iron Man Management System`,
    img: IronMan,
    review: `A project that has been using Java that can help our hard-working
    IRON MEN to manage their daily activities.`,
    link: 'https://github.com/007-Shivam/IRON-MAN-Management-System'
  },
  {
    name: `Cosmos App`,
    img: Cosmos,
    review: `It is a community app which let us to join various communities like GDSC, GFG, Code chef.`,
    link: 'https://github.com/007-Shivam/COSMOS-App'
  },
  {
    name: `Multi-threading based ATM Banking System`,
    img: ATM,
    review: `ATM project boosts banking efficiency through advanced multithreading techniques.`,
    link: 'https://github.com/007-Shivam/Multhreading_based_ATM_Banking_System'
  },
];
