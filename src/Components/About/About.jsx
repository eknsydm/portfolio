import "./About.css";
import linkedin_logo from "../../assets/icons8-linkedin.svg";
import github_logo from "../../assets/icons8-github.svg";
import itchio_logo from "../../assets/icons8-itch-io.svg";
const skills = [
    "Godot",
    "GDScript",
    "C/C++",
    "SDL",
    "Unity",
    "C#",
    "Linux",
    "Git",
    "GitHub",
    "HTML",
    "CSS",
    "React",
];
const About = () => {
    return (
        <div id="about" className="about">
            <h1>
                About<span>.</span>
                <div className="about-line"></div>
            </h1>
            <div className="about-bottom">
                <div className="about-texts">
                    <p>
                        <span>Hey!</span> I’m Ekin, a game developer and
                        Computer Engineering student from Turkey. I’m currently
                        in my 4th year, focused on crafting games with Godot and
                        C++, plus a bit of Unity and pixel art in Aseprite.
                        Right now, I’m all about making my own games and diving
                        into game jams — nothing beats the thrill of creating on
                        a deadline! When I’m not seeking the fun, I’m either
                        playing violin or deep into games that challenge and
                        inspire me. (Full achievements in Dark Souls 1 — yes, I
                        git and I guded.) I’m always open to new collaborations
                        and fresh ideas. If you want to team up or just chat
                        about design, dev, or if you’ve got thoughts worth
                        kindling, let’s light the bonfire.
                    </p>
                </div>
                <div className="about-skills-container">
                    <div className="about-skills-title">
                        <span className="about-skills-icon">🖥️</span>
                        <h2>Skills</h2>
                    </div>
                    <div className="about-skills-tags">
                        {skills.map((skill, index) => (
                            <span className="about-skill-tag" key={index}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
