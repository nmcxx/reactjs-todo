import React from "react";

export default function TodoListItem(props){
    const { item } = props;

    return(
        <div className="card">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="input-group mb-3">
                        <div classNames="input-group-prepend">
                            <div classNames="input-group-text">
                            <input type="checkbox" aria-label="Checkbox for following text input"/>
                            </div>
                        </div>
                        <span className="input-group-text form-control" style={{textDecoration: item.isCheck ? "line-through" : "none"}}>sdasdasdsad</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}