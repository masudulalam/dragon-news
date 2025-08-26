import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div className="div"></div>
            <div className="nav space-x-7">
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="career">Career</Link>
            </div>
            <div className="login">
                <div className="flex gap-2 items-center">
                    <div className="">
                        <img src={userIcon} alt="User Icon" />
                    </div>
                    <button className="btn btn-neutral">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;