import "./GameJams.css";

const gameJams = [
    {
        name: "Multi Screen Mayhem",
        jam: "Frost Jam 6",
        description:
            "A fast-paced clicker and resource management game where you juggle multiple screens and tasks at once. Balance your attention, upgrade your tools, and optimize workflows to keep the chaos under control",
        techs: ["Godot", "GDScript", "Aseprite"],
        date: "March 2024",
        achivement: "",
        itch: "https://divineneos.itch.io/multiscreen-mayhem-goblin-onslaught",
    },
    {
        name: "Seeking for Solitude",
        jam: "PuraJam'24",
        description:
            "This is a story of a being who only wishes to be alone, to have some space... push things away from you to complete the levels",
        techs: ["Godot", "GDScript", "Aseprite", "Audacity"],
        date: "May 2024",
        achivement: "5th place",
        itch: "https://tuge07.itch.io/seeking-for-solitude",
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
                            <h3>{jam.jam}</h3>
                        </div>
                        <div className="gamejam-meta">
                            <p>{jam.date}</p>
                            <p>{jam.achivement}</p>
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
