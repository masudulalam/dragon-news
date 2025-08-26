import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center py-7">
            <div className="logo">
                <img className="w-[471px]" src={logo} alt="logo" />
            </div>
            <h2 className="text-[#706F6F] mt-5 mb-3">
                Journalism Without Fear or Favour
            </h2>
            <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
        </div>
    );
};

export default Header;