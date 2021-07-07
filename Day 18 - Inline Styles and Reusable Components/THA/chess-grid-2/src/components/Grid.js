import './Grid.css';

const Grid = (props) => {

    return(
        <div className={props.className} style={{backgroundColor:props.color}}>
        </div>
    );
}

export default Grid;