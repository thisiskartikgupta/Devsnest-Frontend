import ListItem from "./ListItem";
import './ScrollView.css';

const ScrollView = (props) => {

    return (
        <div className="scroll-view">

            {
                props.listItem.map((element,index) => <ListItem 
                                                         foodName={element.foodName}
                                                         calories={element.calories}
                                                         key={index} 
                                                         position={index} 
                                                         deleteFunc={props.deleteListItem}/>)
            }            
        </div>
    )
};

export default ScrollView;