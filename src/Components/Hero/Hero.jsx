import "./Hero.css";
import the_gif from "../../assets/1.gif";
import the_photo from "../../assets/fox.svg";
const Hero = () => {
    return (
        <div id="home" className="hero">
            <div className="hero-content">
                <div className="hero-texts">
                    <h1>
                        <div>
                            Hi, I'm Ekin<span>.</span>
                        </div>
                        <div className="hero-what-am-i">
                            I am an <span>Indie Game Developer</span>
                        </div>
                    </h1>
                    <p>
                        I’ve spent three years crafting games and building
                        worlds—alone, with purpose. An Undead seeking the fun in
                        every shadow and challenge. Let’s connect and create
                        something unforgettable.{" "}
                    </p>
                    <div className="hero-action">
                        <a href="#contact" className="hero-connect">
                            Contact Me
                        </a>
                    </div>
                </div>
                <img className="hero-photo" src={the_photo} alt="" />
            </div>
        </div>
    );
};

export default Hero;
