

const List = (props:any) => {

    console.log(props);
    return(
        <div>
            <div>Hallo</div>
            {
                props.data.map((element:string) => <div>{element}</div>)
            }
            {/* {
                props.data.map(() => <div>Kartik</div>)
            } */}
        </div>
    );
};

export default List;