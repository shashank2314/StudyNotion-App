import Button from "./Button";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { TypeAnimation } from "react-type-animation";
function Codeblocks({ Heading, Desc, btn1, btn2, code, flow, codeblock }) {
    
    return (
        <div className={`flex ${flow ? "flex-row" : "flex-row-reverse"} justify-between items-center gap-20 my-20 w-full`}>
            <div className="flex flex-col justify-between gap-8 w-full ">
                <div className="text-4xl text-white font-semibold">
                    {Heading}
                </div>
                <div className="text-richblack-300 text-left text-xs font-bold">{Desc}</div>
                <div className="flex gap-2">
                    <Button active={btn1.btnactive} too={btn1.too} >
                        <div className="flex gap-2 justify-center items-center">
                            {btn1.btntext}
                            <AiOutlineArrowRight/>
                        </div>
                    </Button>
                    <Button active={btn2.btnactive} too={btn2.too} >
                        <div className="flex gap-2 justify-center items-center">
                            {btn2.btntext}
                        </div>
                    </Button>
                    
                </div>
            </div>
            <div className="relative w-full h-fit flex code-border rounded-lg px-4 py-3" >
                {codeblock}
                <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold ">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    <p>12</p>
                    <p>13</p>
                </div>
            <div className="w-[500px]">
                <TypeAnimation 
                    sequence={[code,10000,""]}
                    repeat={Infinity}
                    cursor = {true}
                    omitDeletionAnimation = {true}
                    
                    style={{
                        whiteSpace : "pre-Line",
                        display:"block",
                    }
                    }
                />
            </div>
            </div>
            
        </div>
    );
}



export default Codeblocks;