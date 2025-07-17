import React from "react";
import "./Resume.css";

const Resume = () => {
    const resumeUrl =
        "https://docs.google.com/document/d/1qpnoJVqurOprIF6uM_eOHxsnrw4y4pa8r9uVxQcSa1w/edit?tab=t.0#heading=h.ttx2bymdgl08"; // Update with your resume path

    return (
        <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
        >
            My Resume
        </a>
    );
};

export default Resume;
