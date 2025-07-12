import "./About.css";
import linkedin_logo from "../../assets/icons8-linkedin.svg";
import github_logo from "../../assets/icons8-github.svg";
import itchio_logo from "../../assets/icons8-itch-io.svg";

const skills = [
	"JavaScript",
	"TypeScript",
	"HTML",
	"CSS",
	"React",
	"Redux",
	"NodeJS",
	"Express",
	"Postgres",
	"MongoDB",
	"GitHub",
	"Jira",
	"Heroku",
	"AWS",
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
						<span>Hey!</span> I'm Bob, if you haven't already
						gathered that by now. I'm a painter turned software
						engineer from Daytona, Florida. I specialize in the
						backend, primarily Node and Rust, but love building with
						whatever tools are right for the job. I currently work
						for Google on Google Photos. I also toss in my ¢2 with
						the design systems teams from time to time (once an
						artist, always an artist, amirite?). Outside of work, I
						still love to paint. Any given Sunday you'll find me
						scribbling some happy clouds with my son ☁️ I even teach
						courses online if you're looking to learn! I'm passively
						looking for new positions where I can merge my love for
						code with my love for the canvas. If you think you've
						got an opening that I might like, let's connect 🔗
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
