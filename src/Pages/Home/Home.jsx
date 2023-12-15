import Banner from "../../Header/Banner/Banner";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>  
            <About></About> 
            <Skills></Skills>
            <Contact></Contact>    
        </div>
    );
};

export default Home;