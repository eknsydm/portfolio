import React from "react";
import "./Modal.css";

const Modal = ({ project, onClose }) => {
	if (!project) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close-btn" onClick={onClose}>
					&times;
				</button>

				<img
					className="modal-image"
					src={project.p_modal_img}
					alt={project.p_name}
				/>

				<h2 className="modal-title">{project.p_name}</h2>

				<div className="modal-tech-stack">
					{project.p_techs?.map((tech, idx) => (
						<span key={idx} className="tech-badge">
							{tech}
						</span>
					))}
				</div>

				<p className="modal-description">
					{project.p_description_long}
				</p>

				<div className="modal-links">
					{project.p_github && (
						<a
							href={project.p_github}
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
					)}
					{project.p_demo && (
						<a
							href={project.p_demo}
							target="_blank"
							rel="noopener noreferrer"
						>
							Live Demo
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default Modal;
