

const Home = (props) => {
    
    return(
        <div>
            <h2 style={{textAlign: "center"}}>HOME</h2>
            <h6>If not logged in , cannot access Profile and dashboard</h6>
            <button 
                onClick={() => {props.setIsAuthenticated(!props.isAuthenticated)}}>
                {props.isAuthenticated ? "LOGOUT" : "LOGIN"}
            </button>
        </div>
    )
}

export default Home;