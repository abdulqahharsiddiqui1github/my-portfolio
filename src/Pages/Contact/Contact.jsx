import { FaUser } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section className="my-28">
    <h2 className=" text-center  text-cyan-400 text-4xl font-bold underline  ">
    Contact Me
  </h2>
    <div className="lg:flex gap-10 justify-between my-28 lg:mx-24 mx-8"> 
      <div className="flex-1">
        <h2 className="border-l-4 h-8 flex items-center pl-2 text-xl border-cyan-600">Massage me</h2>
        <div className="lg:flex flex-col space-y-4">
          <div className="lg:flex gap-8">
            <input
              className="border-b w-full pb-2 pl-2 outline-none bg-inherit"
              type="text"
              name="name"
              placeholder="name"
            />
            <input
              className="border-b w-full pb-2 pl-2 outline-none bg-inherit"
              type="email"
              name="email"
              placeholder="email"
              id=""
            />
          </div>
          <input
            className="border-b w-full pb-2 pl-2 outline-none bg-inherit"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            className="border-b w-full pb-2 pl-2  outline-none bg-inherit resize-none"
            name=""
            id=""
            cols="25"
            rows="8"
            placeholder="message"
          ></textarea>
        </div>
        <button className="font-semibold text-xl text-cyan-950 iconsHover mt-16 w-3/5 btn-md rounded-full bg-cyan-400 text-black">Submit</button>
      </div>
      <div className="flex-1 lg:mt-0 mt-16">
        <h2 className="border-l-4 h-8 flex items-center pl-2 text-xl border-cyan-600 ">
          Contact Information
        </h2>
        <p className="text-xl mt-4">
          Let's connect and build something awesome together!
        </p>
        <div className="flex mt-8">
          <div className=" flex flex-col gap-y-10 py-4 border-r-4 border-cyan-600 pr-4">
            <FaUser className=" text-5xl text-cyan-500"></FaUser>
            <FaLocationPin className=" text-5xl text-cyan-500"></FaLocationPin>
            <MdEmail className=" text-5xl text-cyan-500"></MdEmail>
          </div>
          <div className="ml-4 flex flex-col  py-4 gap-y-6">
            <div >
            <h2 className="text-2xl ">Name</h2>
            <span className="text-xl text-cyan-600">Siddiqui Abdul Qahhar</span>
            </div>
            <div >
            <h2 className="text-2xl ">Location</h2>
            <span  className="text-xl text-cyan-600">Hajigonj, Chandpur</span>
            </div>
            <div className="" >
            <h2 className="text-2xl ">Email</h2>
            <span  className="lg:text-xl  text-cyan-600 hover:text-cyan-800">abudlqahharsiddiqui@gamil.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
