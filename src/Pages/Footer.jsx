import { FooterLink1, FooterLink2, FooterLink3, FooterLink4 } from "../data/footer-links";
import FooterLink from "../components/Home/footerLink";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import logo from "../assets/Logo/Logo-Full-Light.png";

export default function Footer() {
    return (
        <div className="w-full bg-richblack-700 flex justify-center items-center p-10">
            <div className="w-full flex flex-col lg:flex-row gap-20 justify-center text-left min-h-screen text-white">
                <div className=" flex sm:flex-row flex-col justify-between gap-10">
                    <div className="flex flex-col">
                        <img src={logo} className="w-50 mb-5" alt="logo" />
                        <FooterLink flexDirection={"flex-col"} FooterData={FooterLink1} />
                        <div className="flex flex-row gap-3 text-xl">
                            <FaFacebook className="cursor-pointer" />
                            <FaYoutube className="cursor-pointer" />
                            <FaInstagram className="cursor-pointer" />
                            <FaLinkedin className="cursor-pointer" />
                        </div>
                    </div>
                    <FooterLink flexDirection={"flex-col"} FooterData={FooterLink3} />
                    <FooterLink flexDirection={"flex-col"} FooterData={FooterLink4} />
                </div>
                <div className="h-[2px] w-full lg:w-[.2%] lg:h-screen  bg-white"></div>
                <FooterLink flexDirection={"flex-row"} FooterData={FooterLink2} />
            </div>
        </div>
    );
}