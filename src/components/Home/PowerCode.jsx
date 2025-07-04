import HighlightBox from "./HighlightBox";
import { HomePageExplore } from "../../data/homepage-explore";
import { useState } from "react";
import PowerCard from "./PowerCard";

const tabsName = HomePageExplore.map((elem) => {
    return elem.tag;
})


function PowerCode() {
    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(
        HomePageExplore[0].courses[0].heading
    );

    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    };

    return (
        <div className="relative overflow-visible w-full">
            {/* Explore more section */}
            <div>
                <div className="text-4xl font-semibold text-center my-10">
                    Unlock the
                    <HighlightBox title={" Power of Code"} />
                    <p className="text-center text-richblack-300 text-lg font-semibold mt-1">
                        Learn to Build Anything You Can Imagine
                    </p>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="hidden lg:flex gap-5 mb-[100px] -mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
                {tabsName.map((ele, index) => {
                    return (
                        <div
                            className={` text-[16px] flex flex-row items-center gap-2 ${currentTab === ele
                                    ? "bg-richblack-900 text-richblack-5 font-medium"
                                    : "text-richblack-200"
                                } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
                            key={index}
                            onClick={() => setMyCards(ele)}
                        >
                            {ele}
                        </div>
                    );
                })}
            </div>
            <div className="hidden lg:block lg:h-[200px]"></div>

            {/* Cards Group */}
            <div className="lg:absolute gap-8 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-6 px-3 z-100">
                {courses.map((ele, index) => {
                    return (
                        <PowerCard
                            key={index}
                            cardData={ele}
                            currentCard={currentCard}
                            setCurrentCard={setCurrentCard}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default PowerCode;











