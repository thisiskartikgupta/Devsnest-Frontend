import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';

import TopAppBar, {
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
  } from '@material/react-top-app-bar';


const MaterialHeader = () => {

    return(
        <div>
            <TopAppBar fixed={true} style={{
                                    backgroundColor:"#123",
                                    color:"#EEE"}}>
                <TopAppBarRow>
                    <TopAppBarSection align='start'>
                        <TopAppBarTitle>FoodCalorie List 2.0</TopAppBarTitle>
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
    
            </div>
    );    
};

export default MaterialHeader;