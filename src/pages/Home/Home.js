import React from "react";

import Slider from "../../components/Slider/Slider";
import VideoPlayer from "../../components/video/VideoPlayer";
import AvailableCourseView from "../../views/availableCourse/AvailableCourseView";
import PopularCourse from "../../views/popular-course/PopularCourse";
import OurPartners from "../partners/OurPartners";

const Home = () => {
	return (
		<div>
			<VideoPlayer />
			<Slider />
			<PopularCourse />
			<AvailableCourseView />
			<OurPartners />
		</div>
	);
};

export default Home;
