import Card from "./Card";
import "./CardMaster.css";

const CardMaster = () => {

    let Cards= [];
    for(let i = 0; i < 4; i++) {

        Cards = [...Cards, [...Array(8)].map( (element, index) => <Card className="Card-container odd"/>)];
        Cards = [...Cards, [...Array(8)].map( (element, index) => <Card className="Card-container even"/>)]
        
    }
    //console.log(Cards);

    return (
        <div className="Card-master-container">
            <div className="Card-master">
                {Cards}
            </div>
        </div>
    );
};


export default CardMaster;

