import { Link } from "react-router-dom";
import BannerImage from "../../assets/member1.png";
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import './Banner.css'

const Banner = () => {
  return (
    <div className=" h-screen  flex items-center  ">
      <div className="w-3/6 space-y-2">
        <h3 className="text-5xl font-extrabold">hy, It's me</h3>
        <h2 className="text-4xl font-bold ">Siddiqui Abdul Qahhar</h2>
        <h3></h3>
        <h3 className="text-5xl  font-extrabold">And I'm a <small className="text-cyan-600">Front end developer</small></h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          inventore doloremque atque tempore suscipit aperiam esse 
        </p>
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
      <div className="w-3/6 flex justify-center">
        <img className="w-3/5" src={BannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
