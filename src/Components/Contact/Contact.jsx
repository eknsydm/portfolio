import "./Contact.css";

const Contact = () => {
	return (
		<div id="contact" className="contact-section">
			<div className="contact-section-top">
				<div className="contact-section-line"></div>
				<h1 className="contact-section-title">
					Contact<span>.</span>
				</h1>
			</div>
			<div className="contact-section-bottom">
				<p className="contact-text">
					Shoot me an email if you want to connect! You can also find
					me on{" "}
					<a
						href="https://www.linkedin.com/in/ekin-saydam-aa937021b/"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>{" "}
					or{" "}
					<a
						href="https://twitter.com/saydam_ekin" 
						target="_blank"
						rel="noopener noreferrer"
					>
						Twitter
					</a>{" "}
					if that's more your speed.
				</p>
				<a href="mailto:ekinsaydam@gmail.com" className="email-link">
					ekinsaydam@gmail.com
				</a>
			</div>
		</div>
	);
};

export default Contact;
