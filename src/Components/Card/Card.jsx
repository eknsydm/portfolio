import "./Card.css";
const Card = ({ imgSrc, imgAlt, title, description, buttonText }) => {
	return (
		<div className="card-container">
			<img src={imgSrc} alt={imgAlt} />
			<h1 className="card-title">{title}</h1>
			<p className="card-description">{description}</p>
		</div>
	);
};

export default Card;
