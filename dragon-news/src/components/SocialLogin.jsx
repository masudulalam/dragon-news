import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h4 className="text-xl font-semibold mb-3">Login With</h4>
            <div className="">
                <button className="btn flex items-center gap-1">
                    <FaGoogle />Login with Google
                </button>
                <button className="btn flex items-center gap-1">
                    <FaGithub />Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;