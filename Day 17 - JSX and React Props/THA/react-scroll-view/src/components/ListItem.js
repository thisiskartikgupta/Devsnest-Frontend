import './ListItem.css';    

const ListItem = (props) => {

    return(
        <div className="list-item">
            <div className="list-item-title">{props.foodName}</div>
            <div className="list-item-text">You have consumed {props.calories} cal today.</div>
        </div>
    );
}

export default ListItem;