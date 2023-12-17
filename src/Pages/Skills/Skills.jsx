import Marquee from "react-fast-marquee";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Skills = () => {
  return (
    <>
      <section className="lg:my-28 my-24">
        <p className="text-sm my-3 text-center text-cyan-700">
          Allow me to display my expertise.
        </p>
        <h2 className=" text-center  text-cyan-400 text-4xl font-bold underline  ">
          My Skills
        </h2>
        <div className="flex flex-col my-36 justify-center items-center">
          <Marquee>
            <ul className="flex items-center gap-16">
              <li className="ml-16">
                <img
                  className="w-[150px] rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw46pXVUn6npDJDj7WaLuRlVkbTSBZDovAgHQn4FZeCA&s"
                  alt="html"
                />
              </li>
              <li>
                <img
                  className="w-[150px] rounded-full"
                  src="https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png"
                  alt="css"
                />
              </li>

              <li>
                <img
                  className="w-[150px] rounded-full"
                  src="https://e7.pngegg.com/pngimages/391/430/png-clipart-bootstrap-full-logo-tech-companies-thumbnail.png"
                  alt="bootstrap"
                />
              </li>
              <li>
                <img
                  className="w-[150px] rounded-full"
                  src="https://e7.pngegg.com/pngimages/725/775/png-clipart-javascript-html-logo-blog-css3-javanese-miscellaneous-angle-thumbnail.png"
                  alt="js"
                />
              </li>
              <li>
                <img
                  className="w-[150px] rounded-full"
                  src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-[150px] rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlxE-6fq-RHV1KAz0OOLSk12svqXWIjkKaaf2BLNpJYWv4x8QOoURGD5HS2R5Wxz6PDp0&usqp=CAU"
                />
              </li>
              <li>
                <img
                  className="w-[150px] rounded-full"
                  src="https://s3-alpha.figma.com/hub/file/3709321768/b28165db-1eed-4f6a-9027-8f3317357e55-cover.png"
                />
              </li>
              <li>
                <img
                  className="w-[150px] rounded-full"
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--ktYESCeQ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxy1c2bvl6odeo52dodk.jpg"
                  alt="tailwind"
                />
              </li>
            </ul>
          </Marquee>
        </div>
      </section>
      <section className="my-14 ">
        <h3 className="text-3xl text-cyan-400 text-center font-bold  pb-8">Technical Skills Overview</h3>
      <div  className="flex my-4 mb-8 gap-8 lg:px-32 flex-wrap justify-center"> 
        <div
        className="flex mb-16 flex-col" 
        style={{ width: 200, height: 200 }}>
          <CircularProgressbarWithChildren value={90}>
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
            <div style={{ fontSize: 12, marginTop: -5 }}>
            <strong className="text-4xl">90<small className="text-sm">%</small></strong>
            </div>
          </CircularProgressbarWithChildren>
          <span className="text-center my-8 text-3xl font-semibold  text-cyan-500">Html</span>
        </div>
        <div 
        className="flex mb-16  flex-col"
        style={{ width: 200, height: 200 }}>
          <CircularProgressbarWithChildren value={80}>
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
            <div style={{ fontSize: 12, marginTop: -5 }}>
            <strong className="text-4xl">80<small className="text-sm">%</small></strong>
            </div>
          </CircularProgressbarWithChildren>
          <span className="text-center my-8 text-3xl font-semibold  text-cyan-500">css</span>
        </div>
        <div
        className="flex mb-16 flex-col"
         style={{ width: 200, height: 200 }}>
          <CircularProgressbarWithChildren value={60}>
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
           
            <div style={{ fontSize: 12, marginTop: -5 }}>
            <strong className="text-4xl">60<small className="text-sm">%</small></strong>
            </div>
          </CircularProgressbarWithChildren>
          <span className="text-center my-8 text-3xl font-semibold  text-cyan-500">JavaScript</span>
        </div>
        <div 
        className="flex mb-16 flex-col"
        style={{ width: 200, height: 200 }}>
          <CircularProgressbarWithChildren value={90}>
            
            <div style={{ fontSize: 16, marginTop: -1 }}>
              <strong className="text-4xl">80<small className="text-sm">%</small></strong>
            </div>
          </CircularProgressbarWithChildren>
          <span className="text-center my-8 text-3xl font-semibold  text-cyan-500">React </span>
        </div>
      </div>
      </section>
    </>
  );
};

export default Skills;
