import React from "react"
import "./style.css"
import { Box, Typography } from "@mui/material"
import aboutImg from "../../../assets/images/perro-pug-en-el-jardin.png"

const About = () => {
  return (
    <Box className='about-container'>
      <Box className='about-title-container'>
        <Typography className='about-title' variant='h4'>
          About us
        </Typography>
      </Box>
      <Box className='about-img-text-container gradient-background left'>
        <img src={aboutImg} alt='pug on garden' className='about-img'></img>
        <Typography className='about-p'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          repellat natus suscipit. Ipsam molestiae praesentium, ratione dolore,
          ullam harum sequi ut voluptatibus amet quae fugit. Quos eligendi dicta
          sed voluptatibus iusto fugit saepe obcaecati exercitationem
          distinctio, quibusdam tempora maxime corporis ratione laboriosam
          quidem aspernatur magnam molestiae, cum laudantium assumenda
          perspiciatis.
        </Typography>
      </Box>
      <Box className='about-img-text-container'>
        <img
          src='https://dogsbestlife.com/wp-content/uploads/2021/02/dog-lovers-border-collies-scaled.jpeg'
          alt='people with dogs'
          className='about-img'
          style={{ order: 1 }}
        ></img>
        <Typography className='about-p' style={{ order: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quia
          itaque veritatis distinctio error eum libero eius qui. Sit corrupti
          laudantium inventore maxime recusandae obcaecati aperiam? Ducimus ipsa
          cum expedita.
        </Typography>
      </Box>
      <Box className='about-img-text-container'>
        <img
          src='https://www.lawnstarter.com/blog/wp-content/uploads/2023/08/pexels-blue-bird-7210705new-1.png'
          alt='multiple dogs and a woman'
          className='about-img'
        ></img>
        <Typography className='about-p'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quia
          itaque veritatis distinctio error eum libero eius qui. Sit corrupti
          laudantium inventore maxime recusandae obcaecati aperiam? Ducimus ipsa
          cum expedita.
        </Typography>
      </Box>
    </Box>
  )
}

export default About
