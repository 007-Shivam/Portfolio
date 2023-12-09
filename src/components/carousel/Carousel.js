import React, { useEffect, useState } from 'react'
import './Carousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LightSpeed from 'react-reveal/LightSpeed';

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
import ToDo from '../../assets/projects/todo.png'
import Booking from '../../assets/projects/booking.jpg'
import Portfolio from '../../assets/projects/portfolio.jpg'



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
            {data.map((d) => (
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

const data = [
  {
    name: `Eye State Prediction`,
    Python: 'Python',
    ML: 'ML',
    img: Eye,
    review: `Utilizing Machine Learning to Detect Eye Openness/Closure from EEG Data.
    Research Paper accepted at Scopus.`,
    link: 'https://github.com/007-Shivam/Eye_State_Prediction',
  },
  {
    name: `BVDUDET ACM-SC Website`,
    ReactJS: 'ReactJS',
    img: ACM,
    review: `BVPDET ACM Students Chapter website: Fostering community, advancing computing knowledge.`,
    link: 'https://github.com/BVDUDET-ACM-Student-Chapter/BVDUDET-ACM-Website',
    website: 'https://bvdudet-acm-website-000.web.app/'
  },
  {
    name: `Portfolio`,
    ReactJS: 'ReactJS',
    CSS: 'CSS',
    img: Portfolio,
    review: `Showcasing my diverse skills and projects through a sleek portfolio website. Explore my journey here!`,
    link: 'https://github.com/007-Shivam/Portfolio',
    website: 'https://shivambhosle.vercel.app/'

  },
  {
    name: `Forecastify`,
    ReactJS: 'ReactJS',
    CSS: 'CSS',
    API: 'API',
    img: Weather,
    review: `Sleek ReactJS app offering real-time global weather updates, ensuring modern, user-friendly access anywhere, anytime.`,
    link: 'https://github.com/007-Shivam/Forecastify',
    website: 'https://forecastify-app.vercel.app/'

  },
  {
    name: `Priority Pal`,
    ReactJS: 'ReactJS',
    CSS: 'CSS',
    img: ToDo,
    review: `Your trusty companion for seamless task management, helping you prioritize and conquer your to-do list with ease.`,
    link: 'https://github.com/007-Shivam/Priority-Pal',
    website: 'https://priority-pal.onrender.com'

  },
  {
    name: `Restaurant Booking Service`,
    ReactJS: 'ReactJS',
    Tailwind: 'Tailwind',
    img: Booking,
    review: `Effortlessly reserve your table at the finest restaurants with our seamless and user-friendly booking service.`,
    link: 'https://github.com/007-Shivam/Restaurant-Booking-Service',
    website: 'https://restaurant-booking-service.vercel.app/'
  },
  {
    name: `Little Lemon`,
    Kotlin: 'Kotlin',
    Jetpack: 'Jetpack Compose',
    img: LittleLemon,
    review: `Little Lemon is a delightful restaurant menu browsing app developed using Kotlin
    Jetpack Compose.`,
    link: 'https://github.com/007-Shivam/Little_Lemon'
  },
  {
    name: `CSE-AIML Website`,
    HTML: 'HTML',
    CSS: 'CSS',
    Javascript: 'Javascript',
    img: BVP,
    review: `A website created for my College for the CSE-AIML branch of engineering for
    students, parents, and teachers.`,
    link: 'https://github.com/007-Shivam/CSE-AIML-Website'
  },
  {
    name: `Simple Quiz App`,
    Dart: 'Dart',
    img: Quiz,
    review: `A Dart-based quiz app for interactive knowledge tests, providing instant feedback to users on their answers.`,
    link: 'https://github.com/007-Shivam/simplequizapp'
  },
  {
    name: `Feedfolks`,
    Figma: 'Figma',
    img: Feedfolks,
    review: `Mobile app designed to aid in feeding the hungry, streamlining assistance to those in need.`,
    link: 'https://github.com/007-Shivam/FeedFolks'
  },
  {
    name: `Restaurant Reservation System Design`,
    Figma: 'Figma',
    img: Restaurant,
    review: `UI design for reservation system of a restaurant.`,
    link: 'https://github.com/007-Shivam/Restaurant_Reservation_System_Design'
  },
  {
    name: `Meal Planner Expert System`,
    Python: 'Python',
    AI: 'AI',
    img: MealPlanner,
    review: `A Python Program with a knowledge base to suggest a nutritional intake
    according to BMR calculated.`,
    link: 'https://github.com/007-Shivam/Meal_Planner_Expert_System'
  },
  {
    name: `AI Mental Health Tracker`,
    Python: 'Python',
    ML: 'ML',
    img: AI,
    review: `A predictive model for monitoring and tracking mental health using artificial intelligence and machine learning models.`,
    link: 'https://github.com/007-Shivam/AI_Mental_Health_Tracker'
  },
  {
    name: `Simple Jarvis Assistant`,
    Python: 'Python',
    img: Jarvis,
    review: `Python virtual assistant: handles time/date updates, Wikipedia searches, website openings, and more.`,
    link: 'https://github.com/007-Shivam/Basic_Jarvis_Assistant'
  },
  {
    name: `Iron Man Management System`,
    Java: 'Java',
    img: IronMan,
    review: `Java project for managing daily activities of hard-working "IRON MEN."`,
    link: 'https://github.com/007-Shivam/IRON-MAN-Management-System'
  },
  {
    name: `Cosmos App`,
    Kotlin: 'Kotlin',
    Jetpack: 'Jetpack Compose',
    img: Cosmos,
    review: `It is a community app which let us to join various communities like GDSC, GFG, Code chef.`,
    link: 'https://github.com/007-Shivam/COSMOS-App'
  },
  {
    name: `Multi-threading based ATM Banking System`,
    Python: 'Python',
    img: ATM,
    review: `ATM project boosts banking efficiency through advanced multithreading techniques.`,
    link: 'https://github.com/007-Shivam/Multhreading_based_ATM_Banking_System'
  },
];
