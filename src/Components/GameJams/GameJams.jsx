import "./GameJams.css";

const gameJams = [
	{
		name: "GMTK Game Jam 2024",
		role: "Gameplay Programmer",
		description:
			"Developed a fast-paced platformer in 48 hours. Focused on responsive player movement and collision mechanics using Godot. Our team ranked in the top 10% for fun.",
		techs: ["Godot", "GDScript", "Aseprite", "Tiled", "Git"],
		date: "July 2024",
		team: "Team PixelStorm",
		itch: "https://yourname.itch.io/platform-panic",
	},
	{
		name: "Ludum Dare 52",
		role: "Solo Developer",
		description:
			"Created a puzzle game based on reversing time. All gameplay logic, art, and audio were done solo. Received praise for originality and polish.",
		techs: ["Unity", "C#", "Photoshop", "Audacity"],
		date: "January 2024",
		team: "Solo",
		itch: "https://yourname.itch.io/time-reversal",
	},
];

const GameJams = () => {
	return (
		<div className="gamejams-section">
			<h1 className="section-title">
				Game Jams<span>.</span>
				<div className="section-line"></div>
			</h1>
			{gameJams.map((jam, index) => (
				<div key={index} className="gamejam-card">
					<div className="gamejam-header">
						<div>
							<h2>{jam.name}</h2>
							<h3>{jam.role}</h3>
						</div>
						<div className="gamejam-meta">
							<p>{jam.date}</p>
							<p>{jam.team}</p>
						</div>
					</div>

					<p className="gamejam-description">{jam.description}</p>

					<div className="tech-badges">
						{jam.techs.map((tech, idx) => (
							<span key={idx} className="badge">
								{tech}
							</span>
						))}
					</div>

					{jam.itch && (
						<div className="itch-link">
							<a
								href={jam.itch}
								target="_blank"
								rel="noopener noreferrer"
							>
								Play on Itch.io →
							</a>
						</div>
					)}

					{index !== gameJams.length - 1 && <hr />}
				</div>
			))}
		</div>
	);
};

export default GameJams;
