import Grid from './Grid';
import './ChessGrid.css';

const ChessGrid = () => {

    return(
        <div className="chess-grid">
            {
                [...Array(64)].map((element,index) => {

                    // console.log(Math.floor(index/8));
                    let propColor = ((index % 2 && Math.floor(index/8) % 2) || (index % 2 === 0 && Math.floor(index/8) % 2 === 0)) ? "black" : "white";
                    return <Grid className={'grid'} key={index} color={propColor}/>
                })
            }
        </div>
    );
}

export default ChessGrid;