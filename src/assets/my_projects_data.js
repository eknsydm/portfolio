import p_card_img_1 from "../assets/tetris.jpg";
import p_modal_img_1 from "../assets/recording_2025-03-19_14.35.00(1).gif";
import p_card_img_2 from "../assets/flock.png";
import p_modal_img_2 from "../assets/flock.gif";
import p_card_img_3 from "../assets/dungeon_generator.png";
import p_modal_img_3 from "../assets/dungeon_generator.gif";
import p_card_img_4 from "../assets/react.svg";

const projects_data = [
    {
        p_name: "Tetris NES Clone",
        p_card_img: p_card_img_1,
        p_modal_img: p_modal_img_1,
        p_description: "A faithful NES Tetris clone built with SDL2.",
        p_description_long:
            "This project is a faithful NES Tetris clone developed using C++ and SDL2. It replicates original mechanics including gravity, scoring, lock delay, and piece generation (via NES RNG). Through this project, I strengthened my grasp on game loops, memory handling, and low-level rendering.",
        p_techs: ["C++", "SDL2", "Tetris", "OOP"],
        p_github: "https://github.com/eknsydm/Flock-Simulation",
        p_demo: "",
        p_no: 1,
    },
    {
        p_name: "Flocking Simulation",
        p_card_img: p_card_img_2,
        p_modal_img: p_modal_img_2,
        p_description: "Boids-based flocking simulation in Godot.",
        p_description_long:
            "A real-time flocking simulation based on the Boids algorithm, built using Godot Engine and GDScript. The project simulates natural-looking movement of agents (boids) using separation, alignment, and cohesion rules. It was a deep dive into emergent behavior and simple AI.",
        p_techs: ["Godot", "GDScript", "Simulation"],
        p_github: "https://github.com/eknsydm/Flock-Simulation",
        p_demo: "https://divineneos.itch.io/flock-simulation",
        p_no: 2,
    },
    {
        p_name: "Procedural Dungeon Generator",
        p_card_img: p_card_img_3,
        p_modal_img: p_modal_img_3,
        p_description: "Procedural dungeon generator using Godot.",
        p_description_long:
            "This project creates procedural dungeons using a grid-based algorithm in Godot. It features randomized rooms, path carving, and connectivity logic. I designed it to explore procedural content generation and improve my level design pipeline.",
        p_techs: ["Godot", "GDScript", "Procedural Generation"],
        p_github:
            "https://github.com/eknsydm/Procedural-Dungeon-Generator-Demo",
        p_demo: "https://divineneos.itch.io/flock-simulation",
        p_no: 3,
    },
];

export default projects_data;
