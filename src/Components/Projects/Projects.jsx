import React, { useState } from "react";
import Card from "../Card/Card";
import Modal from "../Modal/Modal"; // ← import Modal
import "./Projects.css";
import projects_data from "../../assets/my_projects_data";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="projects">
            <div className="projects-top">
                <div className="projects-line"></div>
                <h1>
                    Projects<span>.</span>
                </h1>
            </div>
            <div className="projects-container">
                {projects_data.map((project, index) => (
                    <div key={index} onClick={() => handleCardClick(project)}>
                        <Card
                            imgSrc={project.p_card_img}
                            imgAlt={project.p_name}
                            title={project.p_name}
                            description={project.p_description}
                            buttonText={project.p_no}
                        />
                    </div>
                ))}
            </div>

            <Modal project={selectedProject} onClose={closeModal} />
        </div>
    );
};

export default Projects;
