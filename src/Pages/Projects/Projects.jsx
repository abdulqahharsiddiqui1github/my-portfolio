const Projects = () => {
  return (
    <div className="my-28 h-screen md:px-28 px-8">
      <h3 className="text-xl mb-3 text-center">view my projects</h3>
      <h2 className=" text-center  text-cyan-400 text-4xl font-bold underline  ">
        My Projects
      </h2>
      {/* projects */}
      <div className="grid mt-20 grid-cols-2 gap-8">
        <div
        className="col-span-2"
        >
          <a
          
          href="http://127.0.0.1:5500/index.html#">
           <p 
           className="bg-base-300 h-[20vh] shadow-lg hover:bg-base-200 rounded-lg"
           ></p>
          </a>
        </div>
        <div>
          <a href="http://127.0.0.1:5500/index.html">
             <p 
           className="bg-base-300 h-[20vh] shadow-lg hover:bg-base-200 rounded-lg"
           ></p>
          </a>
        </div>
        <div
        className="row-span-2"
        >
          <a href="https://abdulqahharsiddiqui1github.github.io/this-is-github-project/#">
             <p 
           className="bg-base-300 h-full shadow-lg hover:bg-base-200 rounded-lg"
           ></p>
          </a>
        </div>
        <div
        >
          <a href="http://127.0.0.1:5500/index.html#">
            <p 
             className="bg-base-300 h-[20vh] shadow-lg hover:bg-base-200 rounded-lg"
           ></p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
