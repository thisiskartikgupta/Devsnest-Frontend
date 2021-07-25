import {updateUsername, updateEmail, updatePassword} from "../redux/form/formActions";
import { useDispatch } from "react-redux";

import "./FormEdit.css";

const FormEdit = () => {

    const dispatch = useDispatch();

    return(
        <div className="form-edit-container">
            <input className="form-input-field" 
                   type="text" 
                   placeholder="Username"
                   onChange={event => {dispatch(updateUsername(event.target.value))}}/>

            <input className="form-input-field"
                   type="email" 
                   placeholder="Email"
                   onChange={event => {dispatch(updateEmail(event.target.value))}}/>

            <input className="form-input-field" 
                   type="password" 
                   placeholder="Password"
                   onChange={event => {dispatch(updatePassword(event.target.value))}}/>

        </div>
    );
};

export default FormEdit;