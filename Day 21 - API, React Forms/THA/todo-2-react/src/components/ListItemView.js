//Material UI imports
import '@material/react-button/dist/button.css';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';

//CSS imports
import './ListItemView.css';


const ListItemView = (props) => {

    let CALORIE_FONTCOLOR = props.calories < 120 ? "#0e0" : (props.calories < 300 ? "#ff0" : "#e00");

    return(
        <div className="list-item">


            <div className="list-content">

                <div className="list-item-title">
                    {props.foodName}
                </div>

                <div className="list-item-text">

                    <div className="subtext">You have consumed </div>

                    <div className="subtext"
                         style = {{color: CALORIE_FONTCOLOR}}
                         >
                             {props.calories}</div>

                    <div className="subtext"> cal today.</div>

                </div>

            </div>
            
            <Button className="list-item-edit-button"
                    raised={true}
                    onClick={()=>{
                        props.setIsEditableTrue(props.position);
                    }}
                >
                <MaterialIcon role="button" icon="edit"/>
            </Button>

            <Button className="list-item-delete-button"
                onClick={() => {props.deleteListItem(props.position)}}
                raised={true}
                >
                <MaterialIcon role="button" icon="delete"/>
            </Button>
                   
        </div>
    )
};

export default ListItemView;