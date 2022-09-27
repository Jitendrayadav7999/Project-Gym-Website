import React from 'react'
import Header from './Header/Header'
import "./Hero.css"
import hero_image from "../assets/hero_image.png"
import hero_image_back from "../assets/hero_image_back.png"
import Heart from "../assets/heart.png"
import calories from "../assets/calories.png"
import NumberCounter from "number-counter"
import { motion } from 'framer-motion'


const Hero = () => {
  const transition = { type: "spring", duration: 3 }
  const mobile = window.innerWidth<=768 ?true:false
  return (
    <div className='hero'>
      <div className="blur hero-blur"></div>
      <div className='left-h'>
        <Header />
        {/* The Best add Section */}
        <div className='best-add'>
          <motion.div
            initial={{ left:mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: 'tween' }}
          >

          </motion.div>
          <span>The best Fitness club in town</span>
        </div>
        {/* Hero Heading */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div><span>Ideal Body</span></div>
          <div>
            <span>
              In here we help you to shape and build your ideal body
              and live up your life to fullest
            </span>

          </div>
        </div>
        <div className='figures'>
          <div>
            <span><NumberCounter 
            end={140}
            start={100}
            delay="4"
            preFix="+" /></span>
            
            <span>export coachs</span>
          </div>
          <div>
            <span>
            <NumberCounter 
            end={912}
            start={800}
            delay="4"
            preFix="+" /></span>
            <span>members joined</span>
          </div>
          <div>
            <span> <NumberCounter 
            end={50}
            start={30}
            delay="4"
            preFix="+" /></span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* Hero button */}
        <div className='hero-button'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>
      <div className='right-h'>
        <button className='btn'>Join Now</button>


        <motion.div
        initial={{right:"-rem"}}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className='heart-rate'>
          <img src={Heart} />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero image */}

        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
        initial={{right:"11rem"}}
          whileInView={{ right: "20rem" }}
          transition={transition}
         src={hero_image_back} alt="" className="hero-image-back" />

        {/* caories */}

        <motion.div
        initial={{right:"37rem"}}
          whileInView={{ right: "28rem" }}
          transition={transition}
         className='calories'>
          <img src={calories} />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
