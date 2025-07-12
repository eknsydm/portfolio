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
						href="https://linkedin.com/in/yourusername"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>{" "}
					or{" "}
					<a
						href="https://twitter.com/yourhandle"
						target="_blank"
						rel="noopener noreferrer"
					>
						Twitter
					</a>{" "}
					if that's more your speed.
				</p>
				<a href="mailto:you@example.com" className="email-link">
					you@example.com
				</a>
			</div>
		</div>
	);
};

export default Contact;
