import BannerImage from "../../assets/member1.png";

const About = () => {
  return (
    <div className="min-h-screen py-8">
      <h2 className=" text-center  text-cyan-400 text-4xl font-bold underline  ">
        About Me
      </h2>
      <div className="flex my-10 items-center justify-center">
        <div className="w-3/6 flex justify-center">
          <img className="w-3/5" src={BannerImage} alt="" />
        </div>
        <div className="w-3/6 space-y-2">
          <h3 className="text-4xl font-extrabold mb-10">Frontend developer !!</h3>
          <p className="text-base">
            <span className="font-bold text-xl">Responsive Design: </span>
            Responsive design is a web development approach that prioritizes
            creating websites and applications capable of adapting to different
            screen sizes and devices. Developers employ techniques such as fluid
            grids, flexible images, and media queries to ensure a seamless user
            experience across desktops, tablets, and mobile devices.
          </p>
          <p className="text-base">
            <span className="font-bold text-xl">
              Performance Optimization:{" "}
            </span>
            Performance optimization in frontend development involves
            implementing strategies to enhance the speed and responsiveness of
            web applications. Developers focus on techniques like code
            splitting, lazy loading, and image optimization to reduce page load
            times. Prioritizing critical rendering paths and minimizing blocking
            resources are key aspects of delivering a high-performance user
            experience.
          </p>
          <p className="text-base">
            <span className="font-bold text-xl">Accessibility: </span>
            Accessibility in web development centers on making digital content
            inclusive and usable for people with disabilities. Frontend
            developers play a vital role in this by adopting practices such as
            semantic HTML, providing alternative text for images, and ensuring
            keyboard navigation. The goal is to create a web environment that
            accommodates all users, regardless of their abilities.
          </p>
          <p className="text-base">
            <span className="font-bold text-xl">
              State Management in React:{" "}
            </span>
            State management in React involves handling and updating the state
            of a component or application. Local state suffices for simpler
            interactions, but as applications grow in complexity, developers
            turn to tools like the Context API or libraries such as Redux for
            managing global state. Striking a balance between local and global
            state ensures maintainability and scalability in React applications.
          </p>
          <p className="text-base">
            <span className="font-bold text-xl">
            Version Control with Git: 
            </span> Git is a distributed version control
            system widely used in software development. Frontend developers
            leverage Git to track changes, collaborate with team members, and
            maintain code integrity. Understanding Git involves mastering
            commands for branching, merging, and conflict resolution, enabling
            developers to work seamlessly within collaborative coding
            environments.
          </p>
          <button className="font-semibold iconsHover btn-sm rounded-full bg-cyan-400 text-black">
            More About Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
