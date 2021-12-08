import React from "react";

import Slider from "../../components/Slider/Slider";
import VideoPlayer from "../../components/video/VideoPlayer";
import AvailableCourseView from "../../views/availableCourse/AvailableCourseView";
import PopularCourse from "../../views/popular-course/PopularCourse";

const Home = () => {
	return (
		<div>
			<VideoPlayer />
			<Slider />
			<PopularCourse />
			<AvailableCourseView />
		</div>
	);
};

export default Home;
