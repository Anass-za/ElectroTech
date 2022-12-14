import React from "react";
import Image from "next/image";
import Image1 from "../public/images/image1.jpg";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
function Home() {
	return (
		<Element id="home" name="home">
			<div>
				<div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 ">
					<div className=" w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
						<Image
							src={Image1}
							alt="Image1"
							layout="fill"
							objectFit="cover"
							className=" rounded-full cursor-pointer hidden md:block"
						/>
					</div>
					<div className="flex flex-col md:ml-20 mx-10 mt-10">
						<h1 className="font-bold text-7xl text-left mb-5">
							Hello, I am <span className="text-indigo-900">ANASS </span>
						</h1>
						<p className="text-left font-normal font mb-5 flex-wrap">
						At your Servises For:
						Installation of your electrical or computer systems,
						Make Your Systems Smarter; IOT,
						Remote Control And Monitor ...
						</p>
						<a
							href="#"
							className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black "
						>
						<Link
										activeClass="Get Contact Now"
										to="Contact"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-600 text-black px-3 py-2"
									>
										Get Contact Now
									</Link>
						</a>
						
					</div>
				</div>
			</div>
		</Element>
	);
}

export default Home;
