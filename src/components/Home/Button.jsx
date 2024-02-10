import { Link } from "react-router-dom";

function Button({children,too,active}){
    return (
    <Link  to={too}>
        <div className={`rounded-md text-[16px] px-4 py-2 border-r-2 border-b-2 font-bold border-richblack-100 w-full
    ${active ? "bg-yellow-50 text-black " :" bg-richblack-400 text-white"} hover:scale-95 transition-all duration-200
    `}>
        {children}
        </div>
       
    </Link>);
}

export default Button;