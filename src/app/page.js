'use client';
import Hero from "@/components/Hero";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, { createContext } from 'react';
import { Mousewheel } from "swiper/modules";
import Story from "@/components/Story";
import Ecosystem from "@/components/Ecosystem";
import Roadmap from "@/components/Roadmap";
import Social from "@/components/Social";

export default function Home() {
	return (
		<div className="h-screen w-full">
			<Swiper
				direction={'vertical'}
				slidesPerView={1}
				spaceBetween={0}
				mousewheel={true}
				modules={[Mousewheel]}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				className="h-full w-full text-black"
			>
				<SwiperSlide className="h-screen w-full bg-black flex items-center justify-center">
					<Hero />
				</SwiperSlide>

				<SwiperSlide className="h-screen w-full bg-black flex items-center justify-center">
					<Story />
				</SwiperSlide>
				
				<SwiperSlide className="h-screen w-full bg-black flex items-center justify-center">
					<Ecosystem />
				</SwiperSlide>
				<SwiperSlide className="h-screen w-full bg-black flex items-center justify-center">
					<Roadmap />
				</SwiperSlide>
				<SwiperSlide className="h-screen w-full bg-black flex items-center justify-center">
					<Social />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
