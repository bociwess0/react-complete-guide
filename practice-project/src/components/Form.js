import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
import Card from "./Card";

function Form(props) {
    return <Card>
            <form className="form">
            <div class="form-group">
                <label >Username</label>
                <input type="text" class="form-control"/>
            </div>
            <div class="form-group">
                <label >Age(Years)</label>
                <input type="text" class="form-control"/>
            </div>
            <button type="submit" class="btn btn-primary">Add User</button>
        </form>
    </Card>
}

export default Form;
