import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h4 className="text-xl font-semibold mt-8 mb-3">Find Us On</h4>
      <div class="join">
        <button class="btn join-item flex items-center gap-1">
            <FaFacebook />Facebook
        </button>
        <button class="btn join-item flex items-center gap-1">
            <FaTwitter />Twitter        
        </button>
        <button class="btn join-item flex items-center gap-1">
            <FaInstagram />Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
