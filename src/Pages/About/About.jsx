import BannerImage from "../../assets/member1.png";

const About = () => {
  return (
    <div className="my-28 md:px-28 px-8">
      <h2 className=" text-center mb-20 text-cyan-400 text-4xl font-bold underline  ">
        About Me
      </h2>
      <div className="md:flex items-center ">
        <div className="flex-1 flex justify-center">
          <img className="w-[400px]" src={BannerImage} alt="" />
        </div>
        <div className="flex-1 md:mt-0 mt-16">
          <h3 className="text-4xl font-extrabold mb-10
          font-extrabold border-l-8 h-24 md:h-16 flex items-center pl-3 border-cyan-600
          ">Frontend developer !!</h3>
          <p>
          I am <span className="text-cyan-400">Siddiqui Abdul Qahhar</span>, i am a  <span className="text-cyan-400"> front end Web Developer</span>   based in  Hajigonj, Bangladesh. My journey in web development has been an exciting one, culminating in my proficiency in  <span className="text-cyan-400">front end Web Development</span>  and the utilization of  MERN stack  technology for building robust web applications. I thrive on the challenges of  front-end and find joy in architecting server-side solutions that power modern web applications. With a strong work ethic and self-motivation, I am dedicated to delivering high-quality results and continuously improving my skills. Beyond coding, I enjoy keeping pace with the ever-evolving tech landscape, attending tech meetups, and engaging in the vibrant developer community. If you're in search of a skilled front end Web Developer who excels in both front-end development and possesses a strong commitment to excellence, I'm here to bring your digital projects to life.
          </p>
          <button className="font-semibold mt-8 iconsHover btn-sm rounded-full bg-cyan-400 text-black">
            More About Me
          </button>
        </div>
      </div>
      <div>
      
      </div>
    </div>
  );
};

export default About;
