import heroImg from "../images/battelfield2.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate(); 
  return (
    <section className="relative text-white">
      {/* Background with image */}
      <div
        className="relative h-[calc(100vh-64px)] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center pt-16"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to the Bhagavad Gita
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover the wisdom of Krishna's teachings to Arjuna in an interactive way.
          </p>
          <button onClick={() => navigate('/chapters')} className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-lg font-semibold">
            Explore All Chapters
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;