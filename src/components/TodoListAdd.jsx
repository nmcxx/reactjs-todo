import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function TodoListAdd()
{
    return(
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Nhập vào việc cần làm" aria-label="Việc cần làm" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Add</button>
            </div>
        </div>
    );
}