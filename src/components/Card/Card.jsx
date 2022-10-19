import "./Card.scss";
import data from "../Variables/data";

function Card() {
    return data.map(({ id, title, image, desc }) => (
        <div className="Card" key={id}>
            <h1>{title}</h1>
            <img src={image} alt={title}></img>
            <p>{desc}</p>
        </div>
    ));
}

export default Card;
