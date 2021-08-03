import React from 'react'

import Slider from '../../components/Slider/Slider'
import AvailableCourseView from '../../views/availableCourse/AvailableCourseView'
import PopularCourse from '../../views/popular-course/PopularCourse'


const Home = () => {
  return (
    <div>
      <Slider />
      <PopularCourse />
      <AvailableCourseView />
      {/* <Work /> */}
    </div>
  )
}

export default Home;
