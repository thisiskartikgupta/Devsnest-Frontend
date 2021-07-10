import './ListItem.css';    

const ListItem = (props) => {

    let fontColor = props.calories < 120 
                        ? "#0e0"
                        : props.calories < 300 
                            ? "#ff0"
                            : "#e00";
                        
    return(
        <div className="list-item">
            
            <div className="list-content">
                <div className="list-item-title">{props.foodName}</div>

                <div className="list-item-text">
                    <div className="subtext">You have consumed </div>
                    <div className="subtext"
                         style = {{color: fontColor}}>{props.calories}</div>
                    <div className="subtext"> cal today.</div>
                </div>
            </div>
            
            <button 
                className="list-item-delete-btn"
                onClick={() => {
                
                    props.deleteFunc(props.position);}}>

                        DELETE 
            </button>
            
        </div>
    );
}

export default ListItem;