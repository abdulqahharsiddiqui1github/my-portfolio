const Projects = () => {
  return (
    <div className="my-28 md:px-28 px-8">
      <h3 className="text-xl mb-3 text-center">view my projects</h3>
      <h2 className=" text-center  text-cyan-400 text-4xl font-bold underline  ">
        My Projects
      </h2>
      {/* projects */}
      <div className="flex gap-8">
        <div>
          <a href="http://127.0.0.1:5500/index.html#">
            <img
              className="hover:opacity-50 hover:-translate-y-px "
              src="https://i.ibb.co/VV1hLZZ/banner-Image.jpg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="http://127.0.0.1:5500/index.html#">
            <img
              className="hover:opacity-50 hover:-translate-y-px "
              src="https://i.ibb.co/VV1hLZZ/banner-Image.jpg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="http://127.0.0.1:5500/index.html#">
            <img
              className="hover:opacity-50 hover:-translate-y-px "
              src="https://i.ibb.co/VV1hLZZ/banner-Image.jpg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="http://127.0.0.1:5500/index.html#">
            <img
              className="hover:opacity-50 hover:-translate-y-px "
              src="https://i.ibb.co/VV1hLZZ/banner-Image.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
