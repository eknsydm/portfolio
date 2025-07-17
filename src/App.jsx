import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import GameJams from "./Components/GameJams/GameJams";
import Contact from "./Components/Contact/Contact";
import Resume from "./Components/Resume/Resume";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <Resume />
                <Hero />
                <About />
                <Projects />
                <GameJams />
                <Contact />
            </div>
        </>
    );
}

export default App;
