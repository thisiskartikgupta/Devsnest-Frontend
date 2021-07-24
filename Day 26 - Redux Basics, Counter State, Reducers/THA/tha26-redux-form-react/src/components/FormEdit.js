import "./FormEdit.css";

const FormEdit = () => {

    return(
        <div className="form-edit-container">
            <input className="form-input-field" type="text" placeholder="Username"/>
            <input className="form-input-field" type="email" placeholder="Email"/>
            <input className="form-input-field" type="password" placeholder="Password"/>
        </div>
    );
};

export default FormEdit;