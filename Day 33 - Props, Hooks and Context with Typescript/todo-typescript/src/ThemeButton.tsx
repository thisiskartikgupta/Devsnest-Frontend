
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const ThemeButton = () => {

    let {theme, setTheme} = useContext(ThemeContext);

    return(
        <button
          onClick={()=> setTheme(!theme)}> CHANGE COLOR </button>
    );
};

export default ThemeButton;