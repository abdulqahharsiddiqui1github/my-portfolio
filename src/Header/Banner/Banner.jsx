import { Link } from "react-router-dom";
import BannerImage from "../../assets/member1.png";
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import './Banner.css'

const Banner = () => {
  return (
    <div className=" lg:mx-20 mx-8 items-center my-20 flex-row-reverse lg:flex justify-between">
      <div className="flex lg:mb-0 mb-16 justify-center">
        <img className="w-[400px]" src={BannerImage} alt="" />
      </div>
      <div className="space-y-5">
        <h3 className="text-5xl font-extrabold border-l-8 h-16 flex items-center pl-3 border-cyan-600">hy, It's me</h3>
        <h2 className="text-6xl font-bold text-white">SIddiqui Abdul QAhhar</h2>
        <h3></h3>
        <h3 className="text-2xl font-bold">And I'm a <small className="text-cyan-600 text-3xl">Front end developer  !!</small></h3>

        <div className="flex py-2 gap-3">
           <Link
           to="https://github.com/"
            className="text-3xl rounded-full iconsHover  text-cyan-300 "
           ><FaGithub></FaGithub></Link>
           <Link
            className="text-3xl rounded-lg bg-whit iconsHover text-cyan-300 "
           ><FaInstagram></FaInstagram></Link>
           <Link
           to="https://www.facebook.com/"
            className="text-3xl rounded-full iconsHover  text-cyan-300 hover:text-cyan-100"
           > <FaFacebook></FaFacebook></Link>
        </div>
           <button className="font-semibold iconsHover btn-sm rounded-full bg-cyan-400 text-black">More About Me</button>
      </div>
      
    </div>
  );
};

export default Banner;
