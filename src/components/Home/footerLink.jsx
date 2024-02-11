import { Link } from "react-router-dom";
function FooterLink({FooterData,flexDirection}) {
    return (
        <div className={`flex ${flexDirection==="flex-row" ? "flex-row justify-between gap-10" : "flex-col"} `}>
            {
                FooterData.map((link, index) => {
                    return (
                        <div key={index} className="flex flex-col mb-6">
                            <div className="text-lg font-bold font-inter mb-5 ">{link.title}</div>
                            {
                                link.links.map((sublink, index2) => {
                                    return (
                                        <Link key={index2} className="font-xs py-[5%] text-richblack-100" to={sublink.link}>{sublink.title}</Link>
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default FooterLink;