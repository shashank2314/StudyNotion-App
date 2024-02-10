import { FooterLink1, FooterLink2, FooterLink3, FooterLink4 } from "../data/footer-links";
import FooterLink from "../components/Home/footerLink";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import logo from "../assets/Logo/Logo-Full-Light.png";

export default function Footer() {
    return (
        <div className="w-full bg-richblack-700 flex justify-center items-center py-8">
            <div className="w-11/12 flex gap-20 justify-center text-left h-screen text-white">
                <div className=" flex gap-10">
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
                <div className="w-[.2%] h-full bg-white"></div>
                <FooterLink flexDirection={"flex-row gap-10"} FooterData={FooterLink2} />
            </div>
        </div>
    );
}