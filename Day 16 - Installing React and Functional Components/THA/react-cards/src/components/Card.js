import './Card.css';

const Card = (props) => {

    return(
        <div className="Card-container">
            <img className="main-card-image" src={props.mainImage.url} alt={props.mainImage.alt}/>

            <div className="card-bottom-container">
                <img className="icon-card-image" src={props.iconImage.url} alt={props.iconImage.alt}/>
                
                <div className="card-info">
                    <div className="Card-text">{props.cardText}</div>
                    <div className="Card-author">{props.cardAuthor}</div>
                </div>
                
            </div>
        </div>
    )
};

export default Card