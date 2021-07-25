import {useSelector} from "react-redux";

import "./FormView.css";

const FormView = () => {

    const formState = useSelector(state => state.formReducer);
    
    return (
        <div className="form-view-container">
            <div className="form-view-label" >Username</div>
            <div className="form-view-field">{formState.username}</div>
            <div className="form-view-label">Email</div>
            <div className="form-view-field">{formState.email}</div>
            <div className="form-view-label">Password</div>
            <div className="form-view-field">{formState.password}</div>
        </div>
    );
};

export default FormView;
