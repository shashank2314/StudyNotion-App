import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Button from "../components/Home/Button";
import Banner from "../assets/Images/banner.mp4";
import HighlightBox from "../components/Home/HighlightBox";
import Codeblocks from "../components/Home/Codeblocks";

import logo1 from "../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../assets/TimeLineLogo/Logo4.svg"
import TimeLineImage from "../assets/Images/TimelineImage.png"
import Know_your_progress from "../assets/Images/Know_your_progress.png"
import Compare_with_others from "../assets/Images/Compare_with_others.png"
import Plan_your_lessons from "../assets/Images/Plan_your_lessons.png"
import Instructor from "../assets/Images/Instructor.png"
import PowerCode from "../components/Home/PowerCode";
import Footer from "./Footer"
function Home() {

    return (
        <div>

            {/* section 1 */}
            <div className="bg-richblack-900 w-full relative flex flex-col items-center text-white justify-between gap-8 ">

                <div className="relative flex flex-col mx-auto w-11/12 items-center text-white justify-between gap-8" >

                    <Link className="flex flex-row px-4 py-2 mt-4 gap-1 bg-richblack-700 rounded-full items-center justify-center border-b-2 border-richblack-400 text-richblack-200 transition-all duration-200 hover:scale-95 hover:bg-richblack-800 w-fit" to={"/signup"}>
                        Become an Instructor <AiOutlineArrowRight />
                    </Link>

                    <div className=" text-4xl text-justify">

                        Empower your future with <HighlightBox title="Coding Skills" />
                    </div>
                    <div className="sm:w-9/12 text-center text-richblack-100">
                        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <Button active={true} too={"/signup"} >Learn More</Button>
                        <Button active={false} too={"/login"} >Book a Demo</Button>
                    </div>
                    <div className="my-12 mx-3 relative shadow-[-3px_-3px_16px_0px_rgba(36,163,227,0.37)]">
                        <video muted loop autoPlay>
                            <source src={Banner} type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <Codeblocks
                            Heading={<div className="text-4xl font-semibold inline">Unlock your <HighlightBox title={"coding potential"} /> with our online courses</div>}
                            Desc="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                            btn1={{ btnactive: true, too: "/signup", btntext: "Try it Yourself" }}
                            btn2={{ btnactive: false, too: "/login", btntext: "Learn More" }}
                            flow={true}
                            codeblock={<div className="codeblock1 absolute"></div>}
                            code={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Shashank Website</title>\n</head>\n<body>\nwelcome\nYou learn a lot of things\n</body>\n</html>`}
                        />
                        <Codeblocks
                            Heading={<div className="text-4xl font-semibold inline">Start <HighlightBox title={" coding in seconds"} /></div>}
                            Desc="Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                            btn1={{ btnactive: true, too: "/signup", btntext: "continue Lesson" }}
                            btn2={{ btnactive: false, too: "/login", btntext: "Learn More" }}
                            flow={false}
                            codeblock={<div className="codeblock2 absolute"></div>}
                            code={`import React from "react";\n import Button from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\nfunction Home()\n{\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                        />
                    </div>
                </div>
                <PowerCode />
            </div>
            {/* section 2 */}
            <div className="bg-pure-greys-5 text-richblack-700 flex flex-col justify-between items-center">
                <div className="bg-hero-pattern h-[320px] w-full flex justify-center items-center lg:pt-20 gap-10">
                            <Button active={true} too={"/signup"}>
                                <div className="w-full flex justify-center items-center">
                                Explore Full Catalog <AiOutlineArrowRight />
                                </div>
                                    
                            </Button>
                            <Button active={false} too={"/login"}>
                                Learn More
                            </Button>
                        
                    
                </div>
                <div className="flex w-11/12 flex-col sm:flex-row gap-10 justify-between h-fit items-center py-10">
                    <div className="text-4xl font-bold w-full md:pr-10">
                        Get the Skills you need for a<HighlightBox title={" Job that is in demand"} />
                    </div>
                    <div className="flex flex-col w-full h-fit justify-between items-start gap-5 text-xl md:pl-10">
                        <p>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
                        <Button active={true} too={"login"}>Learn More</Button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-20 justify-between items-center h-fit">
                    <div className="flex flex-col gap-3">

                        <div className="flex justify-center items-center gap-6">
                            <img src={logo1} alt="logo" className="w-6" />
                            <div className="flex flex-col ">
                                <h3 className="font-bold text-xl">Leadership</h3>
                                <p>Fully committed to the success company</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-6">
                            <img src={logo2} alt="logo" className="w-6" />
                            <div className="flex flex-col ">
                                <h3 className="font-bold text-xl">Leadership</h3>
                                <p>Fully committed to the success company</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-6">
                            <img src={logo3} alt="logo" className="w-6" />
                            <div className="flex flex-col ">
                                <h3 className="font-bold text-xl">Leadership</h3>
                                <p>Fully committed to the success company</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-6">
                            <img src={logo4} alt="logo" className="w-6" />
                            <div className="flex flex-col ">
                                <h3 className="font-bold text-xl">Leadership</h3>
                                <p>Fully committed to the success company</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-[300px] h-[270px] md:w-[600px] md:h-[500px]  bg-white ">
                            <img src={TimeLineImage} className=" w-[600px] h-fit" alt="" />
                        </div>
                        <div className="absolute bottom-2 left-5  right-5 p-8 text-xl bg-caribbeangreen-500 text-white flex justify-between items-center">
                            <div className="flex gap-2 justify-between items-center">
                                <div>25</div>
                                <div className="text-xs text-caribbeangreen-25">YEARS OF EXPERIENCE</div>
                            </div>
                            <div className="bg-white w-[1px] h-10"></div>
                            <div className="flex gap-2 justify-between items-center">
                                <div>250</div>
                                <div className="text-xs text-caribbeangreen-25">TYPES OF COURSES</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-4xl font-semibold text-center my-10">
                        Your swiss knife for
                        <HighlightBox title={"learning any language"} />
                        <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
                            Using spin making learning multiple languages easy. with 20+
                            languages realistic voice-over, progress tracking, custom schedule
                            and more.
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0 gap-0 lg:gap-5">
                            <img
                                src={Know_your_progress}
                                alt=""
                                className="w-fit lg:-mr-32 "
                            />
                            <img
                                src={Compare_with_others}
                                alt=""
                                className="w-fit "
                            />
                            <img
                                src={Plan_your_lessons}
                                alt=""
                                className="w-fit  lg:-ml-36  "
                            />
                        </div>
                    </div>

                    <div className="w-fit flex mx-auto lg:mb-20 mb-8 -mt-5">
                        <Button active={true} too={"/signup"}>
                            <div className="">Learn More</div>
                        </Button>
                    </div>
                </div>
            </div>


            {/* section 3 */}
            <div className="relative flex flex-col w-11/12 justify-between items-center">
                <div className="flex flex-col lg:flex-row gap-20 items-center justify-center w-full">
                    <div className="lg:w-[50%] w-[90%]">
                        <img
                            src={Instructor}
                            alt=""
                            className="shadow-white shadow-[-20px_-20px_0_0]"
                        />
                    </div>
                    <div className="lg:w-[40%] flex gap-10 flex-col">
                        <h1 className="lg:w-[50%] text-4xl font-semibold text-justify text-white">
                            Become an
                            <HighlightBox title={" instructor"} />
                        </h1>

                        <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
                            Instructors from around the world teach millions of students on
                            StudyNotion. We provide the tools and skills to teach what you
                            love.
                        </p>

                        <div className="w-fit flex">
                            <Button active={true} too={"/signup"}>
                                <div className="flex items-center gap-3">
                                    Start Teaching Today
                                    <AiOutlineArrowRight />
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>


            {/* footer */}
            <Footer />
            
        </div >
    );
}

export default Home;
