import Image from "next/image";
import One from "../public/images/1.jpg";
import Two from "../public/images/2.jpg";
import Three from "../public/images/3.jpg";
import Four from "../public/images/4.jpg";
import Five from "../public/images/5.jpg";
import Six from "../public/images/6.jpg";
import Four1 from "../public/images/7.png";
import Five1 from "../public/images/8.png";
import Six1 from "../public/images/9.png";
import Four2 from "../public/images/10.png";
import Five2 from "../public/images/11.png";
import Six2 from "../public/images/12.png";
import Six3 from "../public/images/13.png";
import Six4 from "../public/images/14.png";
import Six5 from "../public/images/15.png";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
function works() {
	return (
		<Element id="work" name="work">
			<div className="w-full my-50 h-auto flex flex-col justify-center items-center  ">
				<p className="text-sm uppercase text-gray-400">Projects</p>
				<h1 className="text-indigo-900 text-6xl font-bold text-center">
					Examples 
				</h1>

				<div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={One}
							alt="One"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>


					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Two}
							alt="two"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>


					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Three}
							alt="three"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
				</div>

				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
					
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Four}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					
					
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Five}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					
					
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Six}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
				</div>


				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
					
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Four1}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					
					
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Five1}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					
					
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Six1}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
				</div>


				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
					
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Four2}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					
					
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Five2}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					
					
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Six2}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
				</div>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 mt-10">
					
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Six3}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					
					
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Six4}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					
					
					<div className="rounded w-80 h-60 shadow-xl relative">
						<Image
							src={Six5}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
				</div>
					
					
				

				
			</div>
		</Element>
	);
}

export default works;
